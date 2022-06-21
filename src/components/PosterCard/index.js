import React from 'react'
import { Link } from "react-router-dom";
import '../../style/posterCard.scss'
 
const PosterCard = () => {
  return (
    <Link to="/detail">
      <div className="card">
        <div className="card__inner">
          <div className="card__front">
            <img 
              src='https://www.themoviedb.org/t/p/w220_and_h330_face/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg'
              className="card__image"
              alt="teste"
            />
            <ul>
              <li className="card__title">
                Fantastic Beasts: The Secrets of Dumbledore
              </li>
              <li className="card__votes">
                Votos: 1890
              </li>
            </ul>
            <span className="card__ball">56*</span>
          </div>
          <div className="card__back">
            <img 
              src="https://image.tmdb.org/t/p/w220_and_h330_face/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
              className="card__backImage"
              alt="back"
            />
            <p className="card__description">
              Professor Albus Dumbledore knows the powerful, dark wizard Gellert 
              Grindelwald is moving to seize control of the wizarding world. 
              Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead 
              an intrepid team of wizards and witches. They soon encounter an array of old 
              and new beasts as they clash with Grindelwald's growing legion of followers.
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
