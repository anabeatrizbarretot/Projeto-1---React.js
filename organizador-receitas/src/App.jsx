import { useState } from 'react'
import { Container, Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap'
import CardReceita from './components/CardReceita/CardReceita'
import './App.css'

function App() {
  const [pesquisa, setPesquisa] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [pagina, setPagina] = useState('explorar')

  const receitasExemplo = [
    {
      id: 52772,
      nome: 'Teriyaki Chicken Casserole',
      categoria: 'Chicken',
      imagem: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'
    },
    {
      id: 52771,
      nome: 'Spicy Arrabiata Penne',
      categoria: 'Vegetarian',
      imagem: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'
    },
    {
      id: 52893,
      nome: 'Apple & Blackberry Crumble',
      categoria: 'Dessert',
      imagem: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg'
    }
  ]

  function pesquisarReceitas(event) {
    event.preventDefault()
    alert('Em breve vamos buscar: ' + pesquisa)
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
                <option>Café da manhã</option>
                <option>Doces</option>
                <option>Carne</option>
                <option>Massas</option>
                <option>Sopas</option>
                <option>Vegetariano</option>
              </Form.Select>
            </Form.Group>
          )}

          {pagina === 'explorar' && (
            <Row className="mt-4 g-4">
              {receitasExemplo.map((receita) => (
                <Col
                  key={receita.id}
                  xs={12}
                  sm={6}
                  lg={4}
                >
                  <CardReceita
                    receita={receita}
                    onVerDetalhes={(receitaSelecionada) =>
                      alert(
                        'Você selecionou: ' +
                        receitaSelecionada.nome
                      )
                    }
                  />
                </Col>
              ))}
            </Row>
          )}

          {pagina === 'favoritos' && (
            <Row className="mt-4">
              <Col>
                <div className="estado-vazio">
                  <div className="card-body">
                    <div className="icone-vazio">
                      🥗
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
    </div>
  )
}

export default App