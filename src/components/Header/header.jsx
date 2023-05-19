import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div id="home"className="container header__container">
        <h1>Little Lemon Restaurant</h1>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default header