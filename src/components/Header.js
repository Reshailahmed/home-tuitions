// src/components/Header.js

import React from 'react';
import './Header.css'; // Import the corresponding CSS file (we'll create it next)

function Header() {
  return (
    <header className="header">
      <h1>Home Tuitions</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
