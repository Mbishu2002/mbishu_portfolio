import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import me from '../../assets/bito books.png';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='my_image'>
          <img src={me} alt="memow" />
        </div>
        <h3>Hello I'm</h3>
        <h1>Mbishu Fabrice</h1>
        <h3 className='text-light'>Software Engineer</h3>
        <CTA />
        <HeaderSocial />
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
