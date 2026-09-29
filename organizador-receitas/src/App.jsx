
import { useState } from 'react'
import { Container, Navbar, Nav, Form, Button, Row, Col, Card } from 'react-bootstrap'
import './App.css'

function App() {
  const [pesquisa, setPesquisa] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [pagina, setPagina] = useState('explorar')

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
          <span className="etiqueta">SUA COZINHA, ORGANIZADA</span>

          <h1>
            O que vamos <span>cozinhar</span> hoje?
          </h1>

          <p>
            Descubra receitas, explore sabores e guarde
            suas favoritas em um só lugar.
          </p>

          <Form onSubmit={pesquisarReceitas} className="form-pesquisa">
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
                {pagina === 'explorar' ? 'Explore receitas' : 'Minhas favoritas'}
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
              <Form.Label>Categoria</Form.Label>

              <Form.Select
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              >
                <option>Todas</option>
                <option>Breakfast</option>
                <option>Chicken</option>
                <option>Dessert</option>
                <option>Pasta</option>
                <option>Seafood</option>
                <option>Vegetarian</option>
              </Form.Select>
            </Form.Group>
          )}

          <Row className="mt-4">
            <Col>
              <Card className="estado-vazio">
                <Card.Body>
                  <div className="icone-vazio">🥗</div>

                  <h3>
                    {pagina === 'explorar'
                      ? 'Suas próximas receitas começam aqui!'
                      : 'Você ainda não tem favoritas'}
                  </h3>

                  <p>
                    {pagina === 'explorar'
                      ? 'Pesquise uma receita para descobrir novos pratos.'
                      : 'Explore receitas e salve as que mais gostar.'}
                  </p>

                  {pagina === 'favoritos' && (
                    <Button onClick={() => setPagina('explorar')}>
                      Explorar receitas
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>

      <footer className="rodape">
        <p>🍃 OrganizaReceitas — descubra, prepare e aproveite.</p>
      </footer>
    </div>
  )
}

export default App