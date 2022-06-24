import React, {useEffect} from 'react'
import BigPicture from './BigPicture'
import Loading from '../Loading'
import Content from './Content'
import Related from './Related'
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
  },[params.movieId])

  console.log(movie);
  
  return (
    <section className="detail__main">
      <span
        className="detail__feature"
        style={{
           background:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`
        }}  
      ></span>
      {loading && <Loading />}
      {!error 
        ? (
          <>
            <BigPicture
              picture={movie.poster_path}
            />
            <Content {...movie}/>
            <Related id={params.movieId}/>
          </>
        )
        : console.error('error',error)
      }
    </section>
  );
}
 
export default Detail;
