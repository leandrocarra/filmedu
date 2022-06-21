import React from 'react'
import { AiFillStar } from 'react-icons/ai'
 
const HeaderDetail = () => {
  return (
    <div className="detail__header">
      <h2 className="detail__title">Avengers: Infinity War</h2>
      <div className="detail__rateStar">
        <span>9.0</span>
        <i><AiFillStar /></i>
      </div>
      <div className="detail__time">
        <p> 2018 |</p> 
        <p> 2h 35min |</p> 
        <p> 16+</p>
      </div>
    </div>
  );
}
 
export default HeaderDetail
