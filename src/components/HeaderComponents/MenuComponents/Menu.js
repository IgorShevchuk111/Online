import React, { useState } from 'react';
import Phones from './Phones/Phones'
import Laptops from './Laptops/Laptops'
import './Menu.css'
import TV from './TV/TV'


function Menu() {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    const mainContainer = document.querySelector('.main');
    if (mainContainer) {
      mainContainer.classList.toggle('menu-open', !menuVisible);
    }
  };
    
  return (
    <div className='menu-container body-2'>
      <div class=" material-icons" onClick={toggleMenu}>{menuVisible ? 'close' : 'menu'}</div>
      {menuVisible && (<div className='menu-items'><Phones /><Laptops /><TV /></div>)}
      <Phones />
      <Laptops />
      <TV />
    </div> 
  )
}

export default Menu;