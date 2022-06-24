import React, {
  createContext,
  useState,
  useEffect,
  useContext
 } from "react";
import { service } from '../services'

const SearchContext = createContext()

export default function SearchProvider({ children }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [redirect, setRedirect] = useState(false)

    const search = (name, page) => {
      setLoading(true)

      service.search
        .searchMovie(name, page)
        .then(setSearchResult(''))
        .then(setSearchResult)
        .then(setRedirect(true))
        .catch(setError)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
      setLoading(false)
    }, [])

  return (
    <SearchContext.Provider
      value={{
        loading,
        search,
        searchResult,
        error,
        redirect
      }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext);
  const {
    loading,
    search,
    searchResult,
    error,
    redirect
  } = context;

  return {
    loading,
    search,
    searchResult,
    error,
    redirect
   };
}
