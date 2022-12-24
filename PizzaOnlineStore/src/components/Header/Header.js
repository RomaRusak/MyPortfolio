import { useState } from 'react';
import Nav from '../Nav/Nav';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Nav />
    </header>
  );
};

export default Header;
