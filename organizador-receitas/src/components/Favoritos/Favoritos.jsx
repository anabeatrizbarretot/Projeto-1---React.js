import { Row, Col, Button } from 'react-bootstrap'
import CardReceita from '../CardReceita/CardReceita'
import './Favoritos.css'

function Favoritos({
  favoritos,
  totalFavoritos,
  onVerDetalhes,
  onToggleFavorito,
  onExplorar,
  onLimparFiltro
}) {
  if (totalFavoritos === 0) {
    return (
      <div className="estado-vazio">
        <div className="card-body">
          <div className="icone-vazio">❤️</div>

          <h3>Você ainda não tem favoritas</h3>

          <p>Explore receitas e salve as que mais gostar.</p>

          <Button onClick={onExplorar}>
            Explorar receitas
          </Button>
        </div>
      </div>
    )
  }

  if (favoritos.length === 0) {
    return (
      <div className="estado-vazio">
        <div className="card-body">
          <div className="icone-vazio">🔍</div>

          <h3>Nenhuma favorita nesta categoria</h3>

          <p>Tente outra categoria ou limpe o filtro.</p>

          <Button onClick={onLimparFiltro}>
            Limpar filtro
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Row className="mt-4 g-4">
      {favoritos.map((receita) => (
        <Col key={receita.id} xs={12} sm={6} lg={4}>
          <CardReceita
            receita={receita}
            favorita
            onVerDetalhes={onVerDetalhes}
            onToggleFavorito={onToggleFavorito}
          />
        </Col>
      ))}
    </Row>
  )
}

export default Favoritos
