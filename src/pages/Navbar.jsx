import React, { useState } from 'react'
import logo from '../images/sunrise_logo.png'
import './Styles.css'
import { RiMenu2Fill } from "react-icons/ri";

function Navbar() {

  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    const about = document.getElementById('about')
    const element = document.getElementById(itemName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else{
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar' id='home'> 
      <div className='logoContainer'>
      <a href="https://www.sunrise-public-school.uk.to"><img src={logo} alt="logo" className='logo'/></a>
      <a href="https://www.sunrise-public-school.uk.to"><p className='logoText'>Sunrise Public School</p></a>
      </div>
      <div className='menu'>
      <RiMenu2Fill size={26} className='menu-icon' id='menu' onClick={toggleMenu} />
      </div>
      <div className='list-items'>
        <ul className={`list ${isMenuOpen ? 'menu-open' : ''}`}>
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>Home</li>
          <li className={activeItem === 'About Us' ? 'active' : ''} onClick={() => handleItemClick('About Us')}>About Us</li>
          <li className={activeItem === 'Gallery' ? 'active' : ''} onClick={() => handleItemClick('Gallery')}>Gallery</li>
          <li className={activeItem === 'Classes' ? 'active' : ''} onClick={() => handleItemClick('Classes')}>Classes</li>
        </ul>
        <a href="https://wa.me/918958300440"><li className='contact'>Contact Us</li></a>
      </div>
    </div>
  )
}

export default Navbar
