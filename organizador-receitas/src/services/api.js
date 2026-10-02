const API_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function buscarReceitas(nome) {
  const resposta = await fetch(
    `${API_URL}/search.php?s=${encodeURIComponent(nome)}`
  )

  if (!resposta.ok) {
    throw new Error('Erro ao consultar a API.')
  }

  const dados = await resposta.json()

  return dados.meals || []
}

export async function buscarReceitaPorId(id) {
  const resposta = await fetch(
    `${API_URL}/lookup.php?i=${id}`
  )

  if (!resposta.ok) {
    throw new Error('Erro ao consultar os detalhes da receita.')
  }

  const dados = await resposta.json()

  return dados.meals ? dados.meals[0] : null
}

export async function listarCategorias() {
  const resposta = await fetch(`${API_URL}/list.php?c=list`)

  if (!resposta.ok) {
    throw new Error('Erro ao consultar as categorias.')
  }

  const dados = await resposta.json()

  return (dados.meals || []).map((item) => item.strCategory)
}

export async function buscarPorCategoria(categoria) {
  const resposta = await fetch(
    `${API_URL}/filter.php?c=${encodeURIComponent(categoria)}`
  )

  if (!resposta.ok) {
    throw new Error('Erro ao filtrar receitas por categoria.')
  }

  const dados = await resposta.json()

  // filter.php não devolve a categoria, então ela é adicionada aqui
  return (dados.meals || []).map((receita) => ({
    ...receita,
    strCategory: categoria
  }))
}

// Converte o formato da API (strMeal, idMeal...) para o formato usado nos cards
export function formatarReceita(receita) {
  return {
    id: receita.idMeal,
    nome: receita.strMeal,
    categoria: receita.strCategory,
    imagem: receita.strMealThumb
  }
}
