import React from 'react'
import Search from '../Search'
import FilmeduLogo from '../../assets/icons/filmeduLogo'
import '../../style/header.scss'
 
const Header = () => {
  return (
    <div className="header">
      <i className="header__logo">
        <FilmeduLogo />
      </i>
      <div className="header__menus">
        <ul>
          <li className="header__active">Popular</li>
          <li>Top Rated</li>
          <li>Lançamentos</li>
        </ul>
      </div>
      <div className="header__search">
        <Search />
      </div>
    </div>
  );
}
 
export default Header
