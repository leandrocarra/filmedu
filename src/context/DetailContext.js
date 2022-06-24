import React, {
  createContext,
  useState,
  useEffect,
  useContext
 } from "react";
import { service } from '../services';

const DetailContext = createContext();

export default function DetailProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState([])
  const [recomendationList, setRecomendationList] = useState([])

    const detailMovie = (id) => {
      setLoading(true)

      service.detail
        .detailMovie(id)
        .then(setMovie)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      setLoading(false)
    }, [])

    const getRecomendation = (id) => {
      setLoading(true)

      service.detail
        .recomendation(id)
        .then(setRecomendationList)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      setLoading(false)
    }, [])

  return (
    <DetailContext.Provider
      value={{
        loading,
        detailMovie,
        movie,
        getRecomendation,
        recomendationList,
        error
      }}>
      {children}
    </DetailContext.Provider>
  )
}

export function useDetail() {
  const context = useContext(DetailContext);
  const {
    loading,
    detailMovie,
    movie,
    getRecomendation,
    recomendationList,
    error
  } = context;

  return {
    loading,
    detailMovie,
    movie,
    getRecomendation,
    recomendationList,
    error
   };
}
