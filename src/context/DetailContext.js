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

  return (
    <DetailContext.Provider
      value={{
        loading,
        detailMovie,
        movie,
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
    error
  } = context;

  return {
    loading,
    detailMovie,
    movie,
    error
   };
}
