import React from 'react'
import { GoSearch } from 'react-icons/go'
import '../../style/search.scss'
 
const Search = () => {
  return (
    <div className='search__container'>
      <GoSearch className='search__icon'/>
      <input type="text" placeholder='Pesquise por um filme'/>      
    </div>
  );
}
 
export default Search
