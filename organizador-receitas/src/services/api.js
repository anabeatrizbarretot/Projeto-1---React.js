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