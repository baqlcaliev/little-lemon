import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What Little lemon Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Healthy food</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Vegan</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Vegetarian</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Local food</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Season food</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Fast delievery</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>ECO Bike transport</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>100% money back guarantee</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>15min food preparation on place</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Flexible payment</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Revolute, Mastercard</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cash</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Crypto</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
      </div>
    </section>
  )
}

export default services