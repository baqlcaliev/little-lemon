import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>We have amazin restaurant</h5>
      <h2>Your Experience on place</h2>
      <div className="container experience__container">
        <div className="experiance__frontend">
          <h3>Our restaurant</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Toys</h4>
                <small className="text-light">High</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Separate room for the little ones</h4>
              <small className="text-light">High</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Garden</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Show cooking</h4>
                <small className="text-light">Know-how</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Animator</h4>
                <small className="text-light">Know-how</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bar</h4>
                <small className="text-light">Know-how</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Our menu</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Pizza</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>pasta</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Lunch menu</h4>
                <small className="text-light">Know-how</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" /> 
              <div>
                <h4>Fish menu</h4>
                <small className="text-light">Know-how</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

/**
1:41**/