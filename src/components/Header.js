import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="container flex justify-between items-center bg-red-600x">
        <img src={require('../assets/fox.png')} alt="Fox" className='logo' />
        <nav className="flex justify-center gap-5">
          <a>Home</a>
          <a>To do list</a>
          <a>About Us</a>
          <a>Contact</a>
        </nav>
        <ul className="flex flex-row gap-5">
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      
      </div>
    </header>
  );
}

export default Header;
