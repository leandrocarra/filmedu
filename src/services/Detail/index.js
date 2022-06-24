import api from "../api";

async function detailMovie(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/movie/${id}?language=pt-BR`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível pegar o detalhe',
        detail: error
      })
    }
  })
}

async function recomendation(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`movie/${id}/recommendations?&language=pt-BR&page=1`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível pegar recomendações',
        detail: error
      })
    }
  })
}

export default {
  detailMovie,
  recomendation
}
