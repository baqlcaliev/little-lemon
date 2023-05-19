import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

//Do not Use images in Production!!

const data = [
{
  id:1,
  image: IMG1,
  title: 'ReactJS App Landing thanks to dribbble.com and coursera.org',
  github: 'https://littlelemon.com/',
  demo: 'https://littlelemon.com/',
},
{
  id:2,
  image: IMG2,
  title: 'Affiliates and Landing pages',
  github: '',
  demo: 'https://littlelemon.com/',
},
{
  id:3,
  image: IMG3,
  title: 'Wordpress themes and custom templates',
  github: '',
  demo: 'https://littlelemon.com/',
},
{
  id:4,
  image: IMG4,
  title: 'Web design and frontend',
  github: '',
  demo: 'https://littlelemon.com/',
},
{
  id:5,
  image: IMG5,
  title: 'Shopify themes',
  github: '',
  demo: 'https://littlelemon.com/',
},
{
  id:6,
  image: IMG6,
  title: 'Responsive pages from scratch',
  github: 'https://littlelemon.com/',
  demo: 'https://littlelemon.com/',
}

]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default portfolio