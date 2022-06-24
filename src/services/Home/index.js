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

async function topRated() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/movie/top_rated?language=pt-BR`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os filmes',
        detail: error
      })
    }
  })
}

async function nowPlaying() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/movie/now_playing?language=pt-BR`)
      resolve(data)
    } catch (error) {
      reject({
        message: 'Não possível listar os filmes',
        detail: error
      })
    }
  })
}

async function upcoming() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/movie/upcoming?language=pt-BR`)
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
  getMovies,
  topRated,
  nowPlaying,
  upcoming
}
