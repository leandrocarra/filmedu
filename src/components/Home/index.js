import React, { useEffect } from 'react'
import PosterCard from '../PosterCard'
import Loading from '../Loading'

import { useHome } from '../../context/HomeContext'

import '../../style/home.scss'

const Home = () => {
  const {
    loading,       
    error,
    getMovieList,
    getTopMovies,
    getNowPlaying,
    getUpcoming,
    movieList,
    topList,
    nowPlayingList,
    upcomingList
  } = useHome()
  
  useEffect(() => {
    getMovieList()
    getTopMovies()
    getNowPlaying()
    getUpcoming()
  }, [])

  return (
    <div className="home__content">
      {loading && <Loading />}
      <h2 className="home__title">Filmes populares no momento</h2>
      <div className="home__line">
        {movieList?.results && movieList.results.map((movie) => {
          return (
            <PosterCard {...movie} key={movie.title}/>
          )
        })}
      </div>

      <h2 className="home__title">Filmes top para sua familia</h2>
      <div className="home__line">
        {topList?.results && topList.results.map((movie) => {
          return (
            <PosterCard {...movie} key={movie.title}/>
          )
        })}
      </div>

      <h2 className="home__title">Filmes na boca do povo agora</h2>
      <div className="home__line">
        {nowPlayingList?.results && nowPlayingList.results.map((movie) => {
          return (
            <PosterCard {...movie} key={movie.title}/>
          )
        })}
      </div>

      <h2 className="home__title">Filmes estão por vir</h2>
      <div className="home__line">
        {upcomingList?.results && upcomingList.results.map((movie) => {
          return (
            <PosterCard {...movie} key={movie.title}/>
          )
        })}
      </div>
      
      
    </div>
  );
}
 
export default Home
