import React from 'react'
import { Link } from "react-router-dom";
import Search from '../Search'
import FilmeduLogo from '../../assets/icons/filmeduLogo'
import '../../style/header.scss'
 
const Header = () => {
  return (
    <div className="header">
      <i className="header__logo">
        <Link to="/">
          <FilmeduLogo />
        </Link>
      </i>
      <div className="header__menus">
        <ul>         
          <li className="header__active">Popular</li>
          <li>
            <Link to="/detail">
              Guia manual
            </Link>
          </li>
          <li>
            <Link to="/">
              home
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__search">
        <Search />
      </div>      
    </div>
  );
}
 
export default Header
