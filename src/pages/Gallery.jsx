import React, { useRef, useEffect } from 'react';
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import img7 from '../images/img7.jpeg'
import img8 from '../images/img8.jpeg'
import img9 from '../images/img9.jpeg'
import img10 from '../images/img10.jpeg'
import img11 from '../images/img11.jpeg'
import img12 from '../images/img12.jpeg'
import img13 from '../images/img13.jpeg'
import img14 from '../images/img14.jpeg'
import img15 from '../images/img15.jpeg'
import img16 from '../images/img16.jpeg'
import img17 from '../images/img17.jpeg'
import img18 from '../images/img18.jpeg'
import img19 from '../images/img19.jpeg'
import img20 from '../images/img20.jpeg'
import img21 from '../images/img21.jpeg'
import img22 from '../images/img22.jpeg'
import img23 from '../images/img23.jpeg'
import img24 from '../images/img24.jpeg'
import img25 from '../images/img25.jpeg'
import img26 from '../images/img26.jpeg'
import img27 from '../images/img27.jpeg'
import img28 from '../images/img28.jpeg'


function Gallery() {
  return (
    <div className='gallery' id='gallery'>
      <div className='title-container'>
      <p className='about-title'>Gallery</p>
      </div>
      <div className='pictures'>
        <div className='div1'>
        <img src={img1} className='picture' />
        <p className='pic-text'>We offer students a wide range of activities facilitated by <br />dedicated and innovative teachers who thoroughly enjoy <br /> engaging with their students.</p>
        <img src={img9} className='picture'/>
        </div>

        <div className='div2'>
        <div className='starting'>
        <img src={img2} className='picture' />
        <img src={img3} className='picture' />
        </div>
        <div className='ending'>
        <img src={img10} className='picture' />
        <img src={img11} className='picture' />
        </div>
        </div>

        <div className="div3">
        <div className="starting">
        <img src={img4} className='picture' />
        <img src={img5} className='picture' />
        <img src={img6} className='picture' />
        </div>   
        <div className='ending'>
        <img src={img13} className='picture' />
        <img src={img8} className='picture'/>
        <img src={img12} className='picture' />
        </div>
        </div>

      </div>
      <hr />
    </div>
  )
}

export default Gallery
