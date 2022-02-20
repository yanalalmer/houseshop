import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/shop'>
        contact
      </Link>
    </div>
  </div>
);

export default Header;
