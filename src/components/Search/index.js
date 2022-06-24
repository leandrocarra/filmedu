import React, {useEffect, useMemo, useState} from 'react'
import debounce from 'lodash.debounce';
import { GoSearch } from 'react-icons/go'
import { useSearch } from '../../context/SearchContext'
import { Redirect } from 'react-router-dom'
import '../../style/search.scss'
 
const Search = () => {
  const [query, setQuery] = useState(""); 
  const {
    redirect,
    search
  } = useSearch()

  const changeHandler = event => {
    setQuery(event.target.value)
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 500);
  }, []);

  useEffect(() => {
    search(query)
  },[])

  return (
    <div className='search__container'>
      <GoSearch className='search__icon'/>
      <input
        type="text"
        placeholder='Buscar'
        onChange={debouncedChangeHandler}
      />
      { redirect && query !== ''
        ? <Redirect to={`/result/${query}`} />
        : null
      } 
    </div>
  );
}
 
export default Search
