import React, { useState } from 'react';
import './navbar.css';
import { Fade as Hamburger } from 'hamburger-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
  };

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li><button onClick={() => handleNavigation('/')}>Home</button></li>
        <li><button onClick={() => handleNavigation('/about')}>About me</button></li>
        <li><button onClick={() => handleNavigation('/ui')}>UI</button></li>
        <li><button onClick={() => handleNavigation('/webdev')}>Web Dev</button></li>
        <li><button onClick={() => handleNavigation('/embedded')}>Embedded</button></li>
        <li><button onClick={() => handleNavigation('/connect')}>Connect</button></li>
      </ul>
      <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
      <ul className={`nav-menu-responsive ${isOpen ? 'show' : 'hidden'}`}>
        <li><button onClick={() => handleNavigation('/')}>Home</button></li>
        <hr />
        <li><button onClick={() => handleNavigation('/about')}>About me</button></li>
        <hr />
        <li><button onClick={() => handleNavigation('/ui')}>UI</button></li>
        <hr />
        <li><button onClick={() => handleNavigation('/webdev')}>Web Dev</button></li>
        <hr />
        <li><button onClick={() => handleNavigation('/embedded')}>Embedded</button></li>
        <hr />
        <li><button onClick={() => handleNavigation('/connect')}>Connect</button></li>
      </ul>
    </div>
  );
}

export default Navbar;
