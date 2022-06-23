import React from 'react'
 
const BigPicture = ({picture}) => {
  return (
    <div className="detail__bigImage">
      <img 
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${picture}`}
        alt="grande"
        className="detail__bigPicture"
      />
      <span className="detail__shadow"></span>
      <span className="detail__shadow--inverter"></span>
    </div>
  );
}
 
export default BigPicture
