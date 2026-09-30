import { Card, Button } from 'react-bootstrap'
import './CardReceita.css'

function CardReceita({ receita, onVerDetalhes }) {
  function abrirDetalhes() {
    onVerDetalhes(receita)
  }

  return (
    <Card
      className="card-receita"
      onClick={abrirDetalhes}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          abrirDetalhes()
        }
      }}
    >
      <Card.Img
        variant="top"
        src={receita.imagem}
        alt={receita.nome}
        className="imagem-receita"
      />

      <Card.Body>
        <span className="categoria-receita">
          {receita.categoria}
        </span>

        <Card.Title>
          {receita.nome}
        </Card.Title>

        <Button
          className="botao-detalhes"
          onClick={(event) => {
            event.stopPropagation()
            abrirDetalhes()
          }}
        >
          Ver detalhes
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardReceita