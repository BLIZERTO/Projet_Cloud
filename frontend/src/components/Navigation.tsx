// @ts-ignore 
import React from 'react';
// @ts-ignore 
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <nav className='sidebar'>
        <img src="logo.svg"></img>
        <ul>
          <li className='menu'>
            <Link to="/">Home</Link>
          </li>
          <li className='menu'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;