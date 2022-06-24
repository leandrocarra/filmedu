import React from 'react'
import SearchResult from '../../components/SearchResult'
import SearchProvider from '../../context/SearchContext'
 
const SearchContainer = () => {
  return (
    <SearchProvider>
      <SearchResult />
    </SearchProvider>
  );
}
 
export default SearchContainer
