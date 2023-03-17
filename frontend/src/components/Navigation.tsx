// @ts-ignore 
import React from 'react';
// @ts-ignore 
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className='sidebar'>
        <div className='logo'>
          <img src="../assets/logo.svg" alt="Logo" />
        </div>
        <div className='menu'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/archives">Compte utilisateur</Link>
            </li>
            <li>
              <Link to="/about">Support</Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navigation;