import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Container, Navbar, Nav, Form, Button, Row, Col, Badge, Alert } from 'react-bootstrap'
import CardReceita from './components/CardReceita/CardReceita'
import ModalReceita from './components/ModalReceita/ModalReceita'
import Filtros from './components/Filtros/Filtros'
import Favoritos from './components/Favoritos/Favoritos'
import {
  buscarReceitas,
  buscarReceitaPorId,
  buscarPorCategoria,
  listarCategorias,
  formatarReceita
} from './services/api'
import {
  ACOES,
  TODAS,
  iniciarEstado,
  receitasReducer,
  salvarFavoritos
} from './reducers/receitasReducer'
import './App.css'

// Usadas enquanto a lista de categorias da API não chega (ou se ela falhar)
const CATEGORIAS_PADRAO = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Pasta',
  'Seafood',
  'Vegetarian'
]

function App() {
  const [estado, dispatch] = useReducer(
    receitasReducer,
    undefined,
    iniciarEstado
  )
  const { favoritos, categoriaExplorar, categoriaFavoritos } = estado

  const [pesquisa, setPesquisa] = useState('')
  const [termoBuscado, setTermoBuscado] = useState('')
  const [pagina, setPagina] = useState('explorar')
  const [receitas, setReceitas] = useState([])
  const [categorias, setCategorias] = useState(CATEGORIAS_PADRAO)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')
  const [receitaSelecionada, setReceitaSelecionada] = useState(null)
  const [mostrarModal, setMostrarModal] = useState(false)

  // evita que uma resposta antiga sobrescreva uma busca/filtro mais recente
  const requisicaoAtual = useRef(0)

  useEffect(() => {
    salvarFavoritos(favoritos)
  }, [favoritos])

  useEffect(() => {
    let ativo = true

    listarCategorias()
      .then((lista) => {
        if (ativo && lista.length > 0) {
          setCategorias(lista)
        }
      })
      .catch(() => {
        // mantém a lista padrão
      })

    return () => {
      ativo = false
    }
  }, [])

  const idsFavoritos = useMemo(
    () => new Set(favoritos.map((favorito) => favorito.id)),
    [favoritos]
  )

  // Com uma pesquisa feita, a categoria filtra os resultados já carregados.
  // Sem pesquisa, a categoria é buscada direto na API (ver selecionarCategoria).
  const receitasExibidas = useMemo(() => {
    if (termoBuscado && categoriaExplorar !== TODAS) {
      return receitas.filter(
        (receita) => receita.categoria === categoriaExplorar
      )
    }

    return receitas
  }, [receitas, termoBuscado, categoriaExplorar])

  const favoritosFiltrados = useMemo(() => {
    if (categoriaFavoritos === TODAS) {
      return favoritos
    }

    return favoritos.filter(
      (favorito) => favorito.categoria === categoriaFavoritos
    )
  }, [favoritos, categoriaFavoritos])

  // No filtro dos favoritos só aparecem categorias que existem nas favoritas
  const categoriasFavoritas = useMemo(() => {
    const lista = new Set(
      favoritos.map((favorito) => favorito.categoria).filter(Boolean)
    )

    if (categoriaFavoritos !== TODAS) {
      lista.add(categoriaFavoritos)
    }

    return [...lista].sort()
  }, [favoritos, categoriaFavoritos])

  async function pesquisarReceitas(event) {
    event.preventDefault()

    if (!pesquisa.trim()) {
      return
    }

    const requisicao = ++requisicaoAtual.current

    setCarregando(true)
    setErro('')

    try {
      const dados = await buscarReceitas(pesquisa)

      if (requisicao !== requisicaoAtual.current) {
        return
      }

      setReceitas(dados.map(formatarReceita))
      setTermoBuscado(pesquisa.trim())
    } catch (error) {
      if (requisicao !== requisicaoAtual.current) {
        return
      }

      setErro('Não foi possível buscar as receitas.')
      setReceitas([])
    } finally {
      if (requisicao === requisicaoAtual.current) {
        setCarregando(false)
      }
    }
  }

  async function carregarPorCategoria(categoria) {
    const requisicao = ++requisicaoAtual.current

    setCarregando(true)
    setErro('')

    try {
      const dados = await buscarPorCategoria(categoria)

      if (requisicao !== requisicaoAtual.current) {
        return
      }

      setReceitas(dados.map(formatarReceita))
    } catch (error) {
      if (requisicao !== requisicaoAtual.current) {
        return
      }

      setErro('Não foi possível filtrar as receitas.')
      setReceitas([])
    } finally {
      if (requisicao === requisicaoAtual.current) {
        setCarregando(false)
      }
    }
  }

  function selecionarCategoriaExplorar(categoria) {
    dispatch({
      type: ACOES.DEFINIR_CATEGORIA,
      pagina: 'explorar',
      categoria
    })

    // já existe uma pesquisa: o filtro é aplicado nos resultados (useMemo)
    if (termoBuscado) {
      return
    }

    if (categoria === TODAS) {
      requisicaoAtual.current++
      setReceitas([])
      setErro('')
      setCarregando(false)
      return
    }

    carregarPorCategoria(categoria)
  }

  function selecionarCategoriaFavoritos(categoria) {
    dispatch({
      type: ACOES.DEFINIR_CATEGORIA,
      pagina: 'favoritos',
      categoria
    })
  }

  function alternarFavorito(receita) {
    if (idsFavoritos.has(receita.id)) {
      dispatch({ type: ACOES.REMOVER_FAVORITO, id: receita.id })
    } else {
      dispatch({ type: ACOES.ADICIONAR_FAVORITO, receita })
    }
  }

  function trocarPagina(novaPagina) {
    setPagina(novaPagina)
    setErro('')
  }

  async function abrirDetalhes(receita) {
    try {
      setErro('')

      const dados = await buscarReceitaPorId(receita.id)

      setReceitaSelecionada(dados)
      setMostrarModal(true)
    } catch (error) {
      setErro('Não foi possível carregar os detalhes da receita.')
    }
  }

  function fecharModal() {
    setMostrarModal(false)
    setReceitaSelecionada(null)
  }

  const filtroExplorarAtivo = categoriaExplorar !== TODAS
  const mostrarSemResultados =
    !carregando &&
    !erro &&
    receitasExibidas.length === 0 &&
    (termoBuscado || filtroExplorarAtivo)

  return (
    <div className="app">
      <Navbar expand="lg" className="navbar-receitas">
        <Container>
          <Navbar.Brand className="marca">
            OrganizaReceitas
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link
              active={pagina === 'explorar'}
              onClick={() => trocarPagina('explorar')}
            >
              Explorar
            </Nav.Link>

            <Nav.Link
              active={pagina === 'favoritos'}
              onClick={() => trocarPagina('favoritos')}
            >
              Favoritas
              {favoritos.length > 0 && (
                <Badge pill className="contador-favoritos">
                  {favoritos.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="conteudo">
        <section className="apresentacao">
          <span className="etiqueta">
            SUA COZINHA, ORGANIZADA
          </span>

          <h1>
            O que vamos <span>cozinhar</span> hoje?
          </h1>

          <p>
            Descubra receitas, explore sabores e guarde
            suas favoritas em um só lugar.
          </p>

          <Form
            onSubmit={(event) => {
              trocarPagina('explorar')
              pesquisarReceitas(event)
            }}
            className="form-pesquisa"
          >
            <Form.Control
              type="text"
              placeholder="Digite o nome de uma receita..."
              value={pesquisa}
              onChange={(event) => setPesquisa(event.target.value)}
            />

            <Button type="submit">
              Pesquisar
            </Button>
          </Form>
        </section>

        <section className="secao-receitas">
          <div className="titulo-secao">
            <div>
              <h2>
                {pagina === 'explorar'
                  ? 'Explore receitas'
                  : 'Minhas favoritas'}
              </h2>

              <p>
                {pagina === 'explorar'
                  ? 'Encontre uma opção para sua próxima refeição.'
                  : 'As receitas que você guardar aparecerão aqui.'}
              </p>
            </div>
          </div>

          {pagina === 'explorar' && (
            <>
              <Filtros
                id="filtro-categoria-explorar"
                categorias={categorias}
                categoriaSelecionada={categoriaExplorar}
                onChange={selecionarCategoriaExplorar}
                totalResultados={
                  !carregando && !erro && receitasExibidas.length > 0
                    ? receitasExibidas.length
                    : undefined
                }
              />

              {carregando && (
                <div className="estado-vazio">
                  <div className="card-body">
                    <div className="icone-vazio">
                      🍳
                    </div>

                    <h3>
                      Buscando receitas...
                    </h3>

                    <p>
                      Aguarde enquanto procuramos receitas.
                    </p>
                  </div>
                </div>
              )}

              {!carregando && erro && (
                <div className="estado-vazio">
                  <div className="card-body">
                    <div className="icone-vazio">
                      😕
                    </div>

                    <h3>
                      Ocorreu um erro
                    </h3>

                    <p>
                      {erro}
                    </p>
                  </div>
                </div>
              )}

              {!carregando &&
                !erro &&
                receitas.length === 0 &&
                !termoBuscado &&
                !filtroExplorarAtivo && (
                  <div className="estado-vazio">
                    <div className="card-body">
                      <div className="icone-vazio">
                        🥗
                      </div>

                      <h3>
                        Suas próximas receitas começam aqui!
                      </h3>

                      <p>
                        Pesquise uma receita ou escolha uma categoria para descobrir novos pratos.
                      </p>
                    </div>
                  </div>
                )}

              {mostrarSemResultados && (
                <div className="estado-vazio">
                  <div className="card-body">
                    <div className="icone-vazio">
                      🔍
                    </div>

                    <h3>
                      Nenhuma receita encontrada
                    </h3>

                    <p>
                      {termoBuscado && filtroExplorarAtivo
                        ? `Não há receitas da categoria ${categoriaExplorar} para "${termoBuscado}".`
                        : 'Tente outra pesquisa ou outra categoria.'}
                    </p>

                    {filtroExplorarAtivo && (
                      <Button
                        onClick={() => selecionarCategoriaExplorar(TODAS)}
                      >
                        Limpar filtro
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {!carregando &&
                !erro &&
                receitasExibidas.length > 0 && (
                  <Row className="mt-4 g-4">
                    {receitasExibidas.map((receita) => (
                      <Col
                        key={receita.id}
                        xs={12}
                        sm={6}
                        lg={4}
                      >
                        <CardReceita
                          receita={receita}
                          favorita={idsFavoritos.has(receita.id)}
                          onVerDetalhes={abrirDetalhes}
                          onToggleFavorito={alternarFavorito}
                        />
                      </Col>
                    ))}
                  </Row>
                )}
            </>
          )}

          {pagina === 'favoritos' && (
            <>
              {erro && (
                <Alert
                  variant="danger"
                  dismissible
                  className="mt-4"
                  onClose={() => setErro('')}
                >
                  {erro}
                </Alert>
              )}

              {favoritos.length > 0 && (
                <Filtros
                  id="filtro-categoria-favoritos"
                  categorias={categoriasFavoritas}
                  categoriaSelecionada={categoriaFavoritos}
                  onChange={selecionarCategoriaFavoritos}
                  totalResultados={favoritosFiltrados.length}
                />
              )}

              <Favoritos
                favoritos={favoritosFiltrados}
                totalFavoritos={favoritos.length}
                onVerDetalhes={abrirDetalhes}
                onToggleFavorito={alternarFavorito}
                onExplorar={() => trocarPagina('explorar')}
                onLimparFiltro={() => selecionarCategoriaFavoritos(TODAS)}
              />
            </>
          )}
        </section>
      </Container>

      <footer className="rodape">
        <p>
          🍃 OrganizaReceitas — descubra, prepare e aproveite.
        </p>
      </footer>

      <ModalReceita
        receita={receitaSelecionada}
        mostrar={mostrarModal}
        favorita={
          receitaSelecionada
            ? idsFavoritos.has(receitaSelecionada.idMeal)
            : false
        }
        onToggleFavorito={alternarFavorito}
        onFechar={fecharModal}
      />
    </div>
  )
}

export default App
