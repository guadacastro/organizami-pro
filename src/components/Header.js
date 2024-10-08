import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="box flex justify-between">
        <img src={require('../assets/fox.png')} alt="Fox" className='logo' />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>login</div>
      </div>
    </header>
  );
}

export default Header;
