import api from "../api";

async function getMovies() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/movie/popular?language=pt-BR`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os filmes',
        detail: error
      })
    }
  })
}

async function getGenres() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/genre/movie/list?language=pt-BR`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os generos',
        detail: error
      })
    }
  })
}

export default {
  getMovies,
  getGenres
}
