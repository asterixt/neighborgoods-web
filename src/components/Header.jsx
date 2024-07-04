import { Link, NavLink } from 'react-router-dom';
import React from 'react';
// import Logo  from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <Link to="/">
         <img src="" alt=""/>
        </Link>
        <nav className="navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/listings">Listings</NavLink>
            <NavLink to="/groups">Groups</NavLink>
        </nav>
    </header>
  )
};

export default Header;