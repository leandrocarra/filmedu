import api from "../api";

async function searchMovie(name, page) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/search/movie?query=${name}&language=pt-BR&page=${page}`)      
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os filmes',
        detail: error
      })
    }
  })
}

export default {
  searchMovie
}
