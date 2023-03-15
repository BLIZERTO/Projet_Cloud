// @ts-ignore 
import React from 'react';
// @ts-ignore 
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className='sidebar'>
        <div className='menu'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Compte utilisateur</Link>
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