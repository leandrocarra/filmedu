import React from 'react'
import Header from '../../components/Header'
 
const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <section className="wrapper">
        {children}
      </section>
    </>
  );
}
 
export default LayoutDefault
