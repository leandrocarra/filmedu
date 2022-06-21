import React from 'react'
import BigPicture from './BigPicture';
import Content from './Content';

import '../../style/detail.scss'
 
const Detail = () => {
  return (
    <section className="detail__main">
      <BigPicture />
      <Content />
    </section>
  );
}
 
export default Detail;
