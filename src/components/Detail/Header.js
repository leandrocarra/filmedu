import React from 'react'
import { AiFillStar } from 'react-icons/ai'
 
const HeaderDetail = ({
  title,
  vote,
  date,
  site,
  runtime
}) => {
  return (
    <div className="detail__header">
      <h2 className="detail__title">{title}</h2>
      <div className="detail__rateStar">
        <span>{vote}</span>
        <i><AiFillStar /></i>
      </div>
      <div className="detail__time">
        <p> {date}</p> 
        <p> {site}</p> 
        <p> {runtime}min</p>
      </div>
    </div>
  );
}
 
export default HeaderDetail
