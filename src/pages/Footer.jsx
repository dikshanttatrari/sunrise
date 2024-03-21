import React from 'react'
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-about'>
          <p className='footer-title'>ABOUT - </p>
          <p className='about-footer'>At Sunrise Public School, we understand that primary school is the foundation of a child's education. Our dedicated faculty creates a nurturing environment where learning becomes a joyful and enjoyable experience.</p>
        </div>
        <div className='links'>
          <p className='footer-title'>USEFUL LINKS - </p>
          <a href="#about"><p>About</p></a>
          <a href="#gallery"><p>Gallery</p></a>
         <div className='social'>
         <a href="https://youtube.com/@15.01-"><FaYoutube size={28}/></a>
          <a href="https://wa.me/918958300440?Hi" className='whatsapp'><FaWhatsapp size={28}/></a>
         </div>

        </div>
        <div className='address'>
          <p className='footer-title'>ADDRESS - </p>
          <p>Bastey, Pithoragarh, Dharchula Road 262501</p>
          <a href="tel:8958300440"><BsFillTelephoneFill/> +91 89583 00440</a>
          <a href="mailto:hemanttatrari1@gmail.com"><IoMdMailOpen/> hemanttatrari1@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
