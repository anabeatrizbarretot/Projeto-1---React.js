import { Card, Button } from 'react-bootstrap'
import './CardReceita.css'

function CardReceita({ receita, favorita = false, onVerDetalhes, onToggleFavorito }) {
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
        // ignora teclas vindas dos botões internos (favoritar / ver detalhes)
        if (event.target !== event.currentTarget) {
          return
        }

        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          abrirDetalhes()
        }
      }}
    >
      <button
        type="button"
        className={`botao-favorito ${favorita ? 'ativo' : ''}`}
        aria-pressed={favorita}
        aria-label={
          favorita
            ? `Remover ${receita.nome} dos favoritos`
            : `Adicionar ${receita.nome} aos favoritos`
        }
        onClick={(event) => {
          event.stopPropagation()
          onToggleFavorito(receita)
        }}
      >
        {favorita ? '❤️' : '🤍'}
      </button>

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
