// @ts-ignore 
import React from 'react';
import { displayPartsToString } from 'typescript';
// @ts-ignore 
import Navigation from '../components/Navigation';
// import MyForm from "../components/Form";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
    <div>
        <Navigation></Navigation>
        <div className='avatar'>
            <img src="./assets/Ellipse_2avatar.png" alt="Logo" />
        </div>
        <div>
            <h1 className='titre'><b>Accueil</b></h1>
        </div>
        <div className='content_container'>
            <div className="content">
            Aliquam scelerisque elit quam, sit amet euismod ipsum semper in. Vivamus sodales sollicitudin dapibus. Fusce id tellus quis leo feugiat pellentesque nec sed justo. Suspendisse tristique, nibh at tincidunt efficitur, ipsum mi blandit diam, eu bibendum orci ex sed felis. Donec faucibus luctus tortor, at lacinia justo tristique a. Morbi dapibus vestibulum nunc a convallis. 
            In bibendum ullamcorper odio, ut tempus elit eleifend eget. Fusce euismod lorem non tincidunt sagittis.
                <div className='information'>
                    <ul>
                        <li>
                        <p>Taille espace disque consommé :</p>
                        </li>
                        <li>
                        <p>Taille de la base de donnée :</p>
                        </li>
                        <li>
                        <p>Backups quotidien :</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='buttons'>
             <Footer></Footer>
        </div>
    </div>
    );
};

export default Project;