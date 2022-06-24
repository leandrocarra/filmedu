import React from 'react'
import { Link } from "react-router-dom";
import Search from '../Search'
import FilmeduLogo from '../../assets/icons/filmeduLogo'
import Smile from '../../assets/icons/smile'
import SearchProvider from '../../context/SearchContext'
import '../../style/header.scss'
 
const Header = () => {
  return (
    <div className="header">
      <i className="header__logo">
        <Link to="/">
          <FilmeduLogo />
        </Link>
      </i>
      <i className="header__smile">
        <Smile />
      </i> 
      <div className="header__search">
        <SearchProvider>
          <Search />
        </SearchProvider>
      </div>    
    </div>
  );
}
 
export default Header
