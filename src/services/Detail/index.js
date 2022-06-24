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

export default {
  detailMovie
}
