import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
const HeaderSocial = () => {
return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/mbishu-fabrice-6a0274169/' target='blank'><BsLinkedin/> </a>
        <a href='https://github.com/Mbishu2002' target='blank'><FaGithub/> </a>
        <a href='https://twitter.com/bito_mcintosh' target='blank'><CgTwitter/> </a>
    </div>
)
}
export default HeaderSocial;