import { Card, Button } from 'react-bootstrap'
import './CardReceita.css'

function CardReceita({ receita, onVerDetalhes }) {
  return (
    <Card className="card-receita">
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
          onClick={() => onVerDetalhes(receita)}
        >
          Ver detalhes
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardReceita