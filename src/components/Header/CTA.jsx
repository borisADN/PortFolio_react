import React from 'react'
import CV from '../../assets/cv.pdf'


export default function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className="btn"> Telecharger Mon CV</a>
      <a href="#contact" className="btn btn-primary">Me Contacter</a>

    </div>
  )
}
