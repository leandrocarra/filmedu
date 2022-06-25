import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

import { useDetail } from '../../context/DetailContext'
 
const Related = ({id}) => {
  const params = useParams()
  const {
    getRecomendation,
    recomendationList,
    error
  } = useDetail()

  useEffect(() => {
    getRecomendation(id)
  },[params.movieId])

  return (
    <div className="detail__relatedWrapper">
      {recomendationList?.results?.length === 0
        ?
          <div>
            Infelizmente não existem recomendações para esse filme, mas talvez você ache algo interessante <Link to="/">aqui</Link>
          </div>
        :
          <>
              <ul className="detail__related">        
              {recomendationList.results && recomendationList.results.map((movie, index)=> {
                return(
                  <Link to={`/detail/${movie.id}`}>
                    <li key={index}>
                      <img
                        src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <p>{movie.title}</p>
                    </li>
                </Link>
                )
              })}
            </ul>
          </>
      }
      
    </div>
  );
}
 
export default Related;
