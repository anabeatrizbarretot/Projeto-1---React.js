import { Modal, Button, Badge } from 'react-bootstrap'
import './ModalReceita.css'

function ModalReceita({ receita, mostrar, onFechar }) {
  if (!receita) {
    return null
  }

  const ingredientes = []

  for (let i = 1; i <= 20; i++) {
    const ingrediente = receita[`strIngredient${i}`]
    const medida = receita[`strMeasure${i}`]

    if (ingrediente && ingrediente.trim()) {
      ingredientes.push({
        ingrediente: ingrediente.trim(),
        medida: medida ? medida.trim() : ''
      })
    }
  }

  return (
    <Modal
      show={mostrar}
      onHide={onFechar}
      size="lg"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {receita.strMeal}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={receita.strMealThumb}
          alt={receita.strMeal}
          className="modal-imagem-receita"
        />

        <div className="informacoes-receita">
          <div>
            <strong>Categoria</strong>
            <Badge>
              {receita.strCategory}
            </Badge>
          </div>

          <div>
            <strong>Origem</strong>
            <span>
              {receita.strArea}
            </span>
          </div>
        </div>

        <section className="secao-detalhes">
          <h3>Ingredientes</h3>

          <div className="lista-ingredientes">
            {ingredientes.map((item, index) => (
              <div
                className="ingrediente"
                key={index}
              >
                <span>
                  {item.ingrediente}
                </span>

                <strong>
                  {item.medida}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <section className="secao-detalhes">
          <h3>Modo de preparo</h3>

          <p className="modo-preparo">
            {receita.strInstructions}
          </p>
        </section>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onFechar}
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalReceita