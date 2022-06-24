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

    const getMovieList = () => {
      setLoading(true)

      service.home
        .getMovies()
        .then(setMovieList)
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
        getMovieList,
        movieList,
        error
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHome() {
  const context = useContext(HomeContext);
  const {
    loading,
    getMovieList,
    movieList,
    error
  } = context;

  return {
    loading,
    getMovieList,
    movieList,
    error
   };
}
