import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5' 
const HeaderDetail = ({
  title,
  vote,
  date,
  runtime,
  description
}) => {
  return (
    <div className="detail__header">
      <p>FILMES</p>
      <h2 className="detail__title">{title}</h2>
      <ul className="detail__ratch">
        <li>{runtime}min</li>
        <li>{vote}/10</li>
        <li>{date}</li>
      </ul>
      <span className="detail__underTitle">
        {description
          ? description
          : 'Não temos a descrição desse filme para lhe mostrar, sorry =('
        }
      </span>
      <div className="detail__button">
        <button className="detail__button--watch">
          Assistir
        </button>
        <button className="detail__button--add">
          <i>
            <IoAddCircleSharp />
          </i>
          <small>Add my playlist</small>
        </button>
      </div>
    </div>
  );
}
 
export default HeaderDetail
