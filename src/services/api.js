import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json;charset=UTF-8",
    'Authorization' : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUzODRlYjg3OTVmZWI3NzIxNTVjYTc1YmU4MDAzMCIsInN1YiI6IjYyYjA4NzBjOTdmZGVjMDA4YjJhNDczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._J4D3xEVV79D792HUZ3Bic03kDkAd2X08g6PXw4BbTQ`
  }
});

export default api;
