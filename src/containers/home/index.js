import React from 'react'
import Home from '../../components/Home'

import HomeProvider from '../../context/HomeContext'
 
const HomeContainer = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}
 
export default HomeContainer;
