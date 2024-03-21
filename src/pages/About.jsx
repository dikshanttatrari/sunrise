import React from 'react'
import img from '../images/img15.jpeg'

function About() {
  return (
    <div id='about' className='about'>
      <p className='about-title'>About Us</p>
      <div className='about-content'>
        <div className='left'>
          <img src={img} alt="img" className='img'/>
        </div>
        <div className='right'>
            <p className='about-text'>At Sunrise Public School, we understand that primary school is the foundation of a child's education. Our dedicated faculty creates a nurturing environment where learning becomes a joyful and enjoyable experience. Since 2000, we have been shaping students into gems, preparing them for higher education and successful careers. We believe that primary knowledge is the building block for a good student, and we enhance learning by incorporating practical forms of education. In addition to academics, we organize various programs to demonstrate to our students that studying is not the only aspect of their development.</p>
            <hr/>
        </div>
      </div>
    </div>
  )
}

export default About
