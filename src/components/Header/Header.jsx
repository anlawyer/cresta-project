import React from 'react';
import HeaderContent from './HeaderContent.jsx';
import './Header.css';

const Header = props => (
  <navbar className='navbar is-dark'>
    <HeaderContent />
  </navbar>
);

export default Header;
