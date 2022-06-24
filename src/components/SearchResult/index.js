import React, {useEffect, useState, useMemo} from 'react'
import {useParams} from 'react-router-dom'
import PosterCard from '../PosterCard'
import Pagination from '../Pagination'

import { useSearch } from '../../context/SearchContext'

const SearchResult = () => {
  const params = useParams()
  const [empty, setEmpty] = useState(false)
  const [data, setData] = useState([])
  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  
  const {
    search,
    searchResult,
    loading,
  } = useSearch()

  useEffect(() => {
    search(params.query)
    if(searchResult?.results?.length === 0) {
      setEmpty(true)
    }else{
      setEmpty(false)
    }
    setData(searchResult.results)
  },[params.query])

  console.log(searchResult);

  return (
    <div>
      { empty
        ? <h1>vazio</h1>
        : <>
            {searchResult.results && searchResult.results.map((item)=> {
              return (
                <PosterCard {...item} key={item.title}/>
              )
            })}
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </>
      }
    </div>
  );
}
 
export default SearchResult
