import React, {useEffect, useState, useMemo} from 'react'
import {useParams} from 'react-router-dom'
import PosterCard from '../PosterCard'
import Pagination from '../Pagination'
import Loading from '../Loading'
import data from '../mock-data.json'

import { useSearch } from '../../context/SearchContext'

const SearchResult = () => {
  const params = useParams()
  const [empty, setEmpty] = useState(false)
  //const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 10;

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
    //setData(searchResult.results)
  },[params.query])

  console.log('em', empty);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  console.log(searchResult);

  return (
    <div>
      {loading && <Loading />}
      { empty
        ? <h1>NENHUM RESULTADO</h1>
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
