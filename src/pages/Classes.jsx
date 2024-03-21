import React from 'react'
import img from '../images/img10.jpeg'

function Classes() {
  return (
    <div className='classes' id='classes'>
      <div className='classes-container'>
      <p className='about-title'>Classes</p>
      </div>
      <div className='flexbox'>
          <div className="left">
              <p className='about-text'>Sunrise Public School is associated with CBSE and offers education from play school to class 8. The school emphasizes on providing a delightful environment for kindergarteners, where they can both play and develop their skills. In order to make their experience enjoyable, we offer a variety of toys and engaging activities that will surely captivate their hearts and foster a love for learning within them.</p>
            <hr />
            <div className='button-container'>
            <a href="https://wa.me/918958300440"><button className='button'>Enroll Now</button></a>
            </div>
          </div>
          <div className="right">
              <img src={img} alt="pic" className='pic' />
          </div>
      </div>
    </div>
  )
}

export default Classes
