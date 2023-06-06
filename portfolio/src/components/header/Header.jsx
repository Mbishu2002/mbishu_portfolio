import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import me from '../../assets/dev.jpg';

const Header = () => {
  return (
    <header>
      <div className='container header__container' style={{display:"flex"}} >

<div id="leftHeader">

 <div className='header__content'>
          <div>
            <h3>Hello, I'm</h3>
            <h1>Mbishu Fabrice</h1>
            <h3 className='text-light'>Software Engineer</h3>
          </div>
          <CTA />
</div>
</div>
<div id="righthe">

 <div className='my_image'>
          <img src={me} alt="memow" />
        </div>

   <HeaderSocial />
 
     
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
</div>
           
    </header>
  );
};

export default Header;
