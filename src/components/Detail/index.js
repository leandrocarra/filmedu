import React from 'react'
import BigPicture from './BigPicture';
import Content from './Content';

import '../../style/detail.scss'
 
const Detail = () => {
  const bgPicture = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg"
  return (
    <section className="detail__main">
      {/* <span
        className="detail__blur" 
        style={{
        backgroundImage: `url("${bgPicture}")`,
        
      }}>

      </span> */}
      <BigPicture />
      <Content />
    </section>
  );
}
 
export default Detail;
