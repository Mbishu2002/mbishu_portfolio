import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
  <header>
     <div className='container header__container'>
       <div className='my_image'>
             <img src="https://unsplash.com/photos/OYzbqk2y26c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" alt="memow"></img>
        </div>
        <h3>Hello I'm</h3>
        <h1>Mbishu Fabrice</h1>
        <h3 className='text-light'>Software Engineer </h3>
        <CTA/>
        <HeaderSocial/>
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
  </header>
)
}
export default Header;