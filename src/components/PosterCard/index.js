import React from 'react'
import { Link } from "react-router-dom"
import '../../style/posterCard.scss'
 
const PosterCard = (movie) => {
  const posterPath = movie.poster_path
  const posterBack = movie.backdrop_path
  
  return (
    <Link to={`/detail/${movie.id}`}>
      <div className="card">
        <div className="card__inner">
          <div className="card__front">
            {posterPath
              ? <img 
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}
                  className="card__image"
                  alt={movie.title}
                />
              : <img 
                  src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                  className="card__image"
                  alt={movie.title}
                />
            }
            
            <ul>
              <li className="card__title">
                {movie.title}
              </li>
              <li className="card__votes">
                Votos: {movie.vote_count}
              </li>
            </ul>
            <span className="card__ball">{movie.vote_average}</span>
          </div>
          <div className="card__back">
          {posterBack
            ? <img 
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterBack}`}
                className="card__image"
                alt={movie.title}
              />
            : <img 
                src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                className="card__image"
                alt={movie.title}
              />
            }
            <p className="card__description">
              {movie.overview}
            </p>
            <ul className="card__backTitle">
              <li className="card__title">
                {movie.title}
              </li>
              <li className="card__votes">
                Votos: {movie.vote_count}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
 
export default PosterCard
