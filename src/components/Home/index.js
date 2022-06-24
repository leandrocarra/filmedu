import React, { useEffect } from 'react'
import PosterCard from '../PosterCard'
import Loading from '../Loading'

import { useHome } from '../../context/HomeContext'

import '../../style/home.scss'

const Home = () => {
  const {
    getMovieList,
    movieList,
    loading
  } = useHome()
  
  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <div className="home__content">
      {loading && <Loading />}
      <h2 className="home__title">Filmes para sua familia</h2>
      {movieList?.results && movieList.results.map((movie) => {
        return (
          <PosterCard {...movie} key={movie.title}/>
        )
      })}
      
    </div>
  );
}
 
export default Home
