import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data=[
  {
    id:1,
    image:IMG1,
    title:"Lorem Ipsum",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
  {
    id:2,
    image:IMG2,
    title:"Lorem Ipsum",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
  {
    id:3,
    image:IMG3,
    title:"Lorem Ipsum",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
  {
    id:4,
    image:IMG4,
    title:"Lorem Ipsum",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
  {
    id:5,
    image:IMG5,
    title:"Lorem Ipsum",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
  {
    id:6,
    image:IMG6,
    title:"Lorem Ipsum",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
]


const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          )
        })}

        {/* C'est possible aussi de le mettre en dur */}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio