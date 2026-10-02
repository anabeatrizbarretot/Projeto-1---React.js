import { Form, Button } from 'react-bootstrap'
import { TODAS } from '../../reducers/receitasReducer'
import './Filtros.css'

function Filtros({ id, categorias, categoriaSelecionada, onChange, totalResultados }) {
  const filtroAtivo = categoriaSelecionada !== TODAS

  return (
    <Form.Group className="filtro-categoria">
      <Form.Label htmlFor={id}>
        Categoria
      </Form.Label>

      <div className="filtro-linha">
        <Form.Select
          id={id}
          value={categoriaSelecionada}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value={TODAS}>Todas</option>

          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </Form.Select>

        {filtroAtivo && (
          <Button
            variant="link"
            className="limpar-filtro"
            onClick={() => onChange(TODAS)}
          >
            Limpar
          </Button>
        )}
      </div>

      {typeof totalResultados === 'number' && (
        <small className="total-resultados">
          {totalResultados === 1
            ? '1 receita'
            : `${totalResultados} receitas`}
        </small>
      )}
    </Form.Group>
  )
}

export default Filtros
