import React, {useEffect} from 'react'
import BigPicture from './BigPicture'
import Loading from '../Loading'
import Content from './Content'
import {useParams} from 'react-router-dom'
import { useDetail } from '../../context/DetailContext'

import '../../style/detail.scss'
 
const Detail = () => {
  const params = useParams()
  const {
    detailMovie,
    loading,
    movie,
    error
  } = useDetail()
  
  useEffect(() => {
    detailMovie(params.movieId)
  },[])
  
  return (
    <section className="detail__main">
      {loading && <Loading />}
      {!error 
        ? (
          <>
            <BigPicture
              picture={movie.poster_path}
            />
            <Content {...movie}/>
          </>
        )
        : console.log('érror',error)
      }
    </section>
  );
}
 
export default Detail;
