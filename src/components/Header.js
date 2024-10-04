import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="box">
        <div>Logo</div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>login</div>
      </div>
      
    </header>
  );
}

export default Header;
