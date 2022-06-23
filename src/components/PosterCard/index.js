import React from 'react'
import { Link } from "react-router-dom"
import '../../style/posterCard.scss'
 
const PosterCard = (movie) => {
  console.log('dentro', movie);
  const posterPath = movie.poster_path
  const posterBack = movie.backdrop_path

  return (
    <Link to={`/detail/${movie.id}`}>
      <div className="card">
        <div className="card__inner">
          <div className="card__front">
            <img 
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}
              className="card__image"
              alt={movie.title}
            />
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
            <img 
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterBack}`}
              className="card__backImage"
              alt="back"
            />
            <p className="card__description">
              {movie.overview}
            </p>
            <ul className="card__backTitle">
              <li className="card__title">
                Fantastic Beasts: The Secrets of Dumbledore
              </li>
              <li className="card__votes">
                Votos: 1890
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
 
export default PosterCard
