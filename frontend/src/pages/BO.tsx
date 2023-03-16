// @ts-ignore 
import React from 'react';
// import { displayPartsToString } from 'typescript';
// @ts-ignore 
import Navigation from '../components/Navigation';
// import MyForm from "../components/Form";
// @ts-ignore
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BO = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='avatar'>
                <img src="./assets/Ellipse_2avatar.png" alt="Logo" />
            </div>
            <div>
                <h1 className='titre'><b>Accueil</b></h1>
            </div>
            <div className='flex flex-row presentation'>
                <div className='flex flex-col container'>
                Aliquam scelerisque elit quam, sit amet euismod ipsum semper in. Vivamus sodales sollicitudin dapibus. Fusce id tellus quis leo feugiat pellentesque nec sed justo. Suspendisse tristique, nibh at tincidunt efficitur, ipsum mi blandit diam, eu bibendum orci ex sed felis. Donec faucibus luctus tortor, at lacinia justo tristique a. Morbi dapibus vestibulum nunc a convallis. 
                In bibendum ullamcorper odio, ut tempus elit eleifend eget. Fusce euismod lorem non tincidunt sagittis.
               </div> 
            </div>
            <div className='buttons'>
                <Link to="/about">Compte utilisateur</Link>
                <Link to="/archives">Ajouter un projet</Link>
                <Footer></Footer>
            </div>
        </div>
        
    );
};
export default BO;