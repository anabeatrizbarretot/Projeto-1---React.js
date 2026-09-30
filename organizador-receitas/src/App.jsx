import { useState } from 'react'
import { Container, Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap'
import CardReceita from './components/CardReceita/CardReceita'
import ModalReceita from './components/ModalReceita/ModalReceita'
import { buscarReceitas, buscarReceitaPorId } from './services/api'
import './App.css'

function App() {
  const [pesquisa, setPesquisa] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [pagina, setPagina] = useState('explorar')
  const [receitas, setReceitas] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')
  const [receitaSelecionada, setReceitaSelecionada] = useState(null)
  const [mostrarModal, setMostrarModal] = useState(false)

  async function pesquisarReceitas(event) {
    event.preventDefault()

    if (!pesquisa.trim()) {
      return
    }

    setCarregando(true)
    setErro('')

    try {
      const dados = await buscarReceitas(pesquisa)

      const receitasFormatadas = dados.map((receita) => ({
        id: receita.idMeal,
        nome: receita.strMeal,
        categoria: receita.strCategory,
        imagem: receita.strMealThumb
      }))

      setReceitas(receitasFormatadas)
    } catch (error) {
      setErro('Não foi possível buscar as receitas.')
      setReceitas([])
    } finally {
      setCarregando(false)
    }
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
              onClick={() => setPagina('explorar')}
            >
              Explorar
            </Nav.Link>

            <Nav.Link
              active={pagina === 'favoritos'}
              onClick={() => setPagina('favoritos')}
            >
              Favoritas
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
            onSubmit={pesquisarReceitas}
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
              <Form.Group className="filtro-categoria">
                <Form.Label>
                  Categoria
                </Form.Label>

                <Form.Select
                  value={categoria}
                  onChange={(event) =>
                    setCategoria(event.target.value)
                  }
                >
                  <option>Todas</option>
                  <option>Breakfast</option>
                  <option>Dessert</option>
                  <option>Beef</option>
                  <option>Chicken</option>
                  <option>Pasta</option>
                  <option>Seafood</option>
                  <option>Vegetarian</option>
                </Form.Select>
              </Form.Group>

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
                receitas.length === 0 && (
                  <div className="estado-vazio">
                    <div className="card-body">
                      <div className="icone-vazio">
                        🥗
                      </div>

                      <h3>
                        Suas próximas receitas começam aqui!
                      </h3>

                      <p>
                        Pesquise uma receita para descobrir novos pratos.
                      </p>
                    </div>
                  </div>
                )}

              {!carregando &&
                !erro &&
                receitas.length > 0 && (
                  <Row className="mt-4 g-4">
                    {receitas.map((receita) => (
                      <Col
                        key={receita.id}
                        xs={12}
                        sm={6}
                        lg={4}
                      >
                        <CardReceita
                          receita={receita}
                          onVerDetalhes={abrirDetalhes}
                        />
                      </Col>
                    ))}
                  </Row>
                )}
            </>
          )}

          {pagina === 'favoritos' && (
            <Row className="mt-4">
              <Col>
                <div className="estado-vazio">
                  <div className="card-body">
                    <div className="icone-vazio">
                      ❤️
                    </div>

                    <h3>
                      Você ainda não tem favoritas
                    </h3>

                    <p>
                      Explore receitas e salve as que mais gostar.
                    </p>

                    <Button
                      onClick={() => setPagina('explorar')}
                    >
                      Explorar receitas
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
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
        onFechar={fecharModal}
      />
    </div>
  )
}

export default App