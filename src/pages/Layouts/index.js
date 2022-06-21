import React from 'react'
import Header from '../../components/Header'
import Tags from '../../components/Tags'
 
const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <Tags />
      <section className="wrapper">
        {children}
      </section>
    </>
  );
}
 
export default LayoutDefault
