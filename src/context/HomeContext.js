import React, {
  createContext,
  useState,
  useEffect,
  useContext
 } from "react";
import { service } from '../services';

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState([])
  const [topList, setTopList] = useState([])
  const [nowPlayingList, setNowPlayingList] = useState([])
  const [upcomingList, setUpcomingList] = useState([])

    const getMovieList = () => {
      setLoading(true)

      service.home
        .getMovies()
        .then(setMovieList)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    const getTopMovies = () => {
      setLoading(true)

      service.home
        .topRated()
        .then(setTopList)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    const getNowPlaying = () => {
      setLoading(true)

      service.home
        .nowPlaying()
        .then(setNowPlayingList)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    const getUpcoming = () => {
      setLoading(true)

      service.home
        .upcoming()
        .then(setUpcomingList)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      setLoading(false)
    }, [])

  return (
    <HomeContext.Provider
      value={{
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
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHome() {
  const context = useContext(HomeContext);
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
  } = context;

  return {
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
   };
}
