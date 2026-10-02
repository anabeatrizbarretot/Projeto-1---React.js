const CHAVE_FAVORITOS = 'organizador-receitas:favoritos'

export const TODAS = 'Todas'

export const ACOES = {
  ADICIONAR_FAVORITO: 'ADICIONAR_FAVORITO',
  REMOVER_FAVORITO: 'REMOVER_FAVORITO',
  DEFINIR_CATEGORIA: 'DEFINIR_CATEGORIA'
}

function carregarFavoritos() {
  try {
    const salvo = localStorage.getItem(CHAVE_FAVORITOS)
    const lista = salvo ? JSON.parse(salvo) : []

    return Array.isArray(lista) ? lista : []
  } catch {
    return []
  }
}

export function salvarFavoritos(favoritos) {
  try {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
  } catch {
    // sem permissão de armazenamento: os favoritos só duram até recarregar
  }
}

// Usado como 3º argumento do useReducer (inicialização preguiçosa)
export function iniciarEstado() {
  return {
    favoritos: carregarFavoritos(),
    categoriaExplorar: TODAS,
    categoriaFavoritos: TODAS
  }
}

export function receitasReducer(estado, acao) {
  switch (acao.type) {
    case ACOES.ADICIONAR_FAVORITO: {
      const jaExiste = estado.favoritos.some(
        (favorito) => favorito.id === acao.receita.id
      )

      if (jaExiste) {
        return estado
      }

      return {
        ...estado,
        favoritos: [acao.receita, ...estado.favoritos]
      }
    }

    case ACOES.REMOVER_FAVORITO:
      return {
        ...estado,
        favoritos: estado.favoritos.filter(
          (favorito) => favorito.id !== acao.id
        )
      }

    case ACOES.DEFINIR_CATEGORIA:
      return acao.pagina === 'favoritos'
        ? { ...estado, categoriaFavoritos: acao.categoria }
        : { ...estado, categoriaExplorar: acao.categoria }

    default:
      return estado
  }
}
