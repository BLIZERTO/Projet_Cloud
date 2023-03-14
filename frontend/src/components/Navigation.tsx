// @ts-ignore 
import React from 'react';
// @ts-ignore 
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bo">Accueil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;