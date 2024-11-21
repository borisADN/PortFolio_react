import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

import './Contact.css'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Prenez Contact</h5>
      <h2>Contactez Moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>  
            <h5>9uJ0w@example.com</h5>
            <a href="mailto:9uJ0w@example.com" target="_blank">Envoyer un message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 312 345 6789</h5>
            <a href="https://api.whatsapp.com/send?phone=573123456789" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
          <FaLocationDot className='contact__option-icon' />
            <h4>Address</h4>
            <h5>123 Main St, Anytown, CA 12345</h5>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Votre Nom Complet' required/>
          <input type="email" name="email" placeholder='Votre Email' required/>
          <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact