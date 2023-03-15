// @ts-ignore 
import React from 'react';
import { displayPartsToString } from 'typescript';
// @ts-ignore 
import Navigation from '../components/Navigation';
// import MyForm from "../components/Form";

const BO = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='flex justify-start content'>
                <h1><b>Accueil</b></h1>
            </div>
            <div className='flew row presentation'>
                Aliquam scelerisque elit quam, sit amet euismod ipsum semper in. Vivamus sodales sollicitudin dapibus. Fusce id tellus quis leo feugiat pellentesque nec sed justo. Suspendisse tristique, nibh at tincidunt efficitur, ipsum mi blandit diam, eu bibendum orci ex sed felis. Donec faucibus luctus tortor, at lacinia justo tristique a. Morbi dapibus vestibulum nunc a convallis. 
                In bibendum ullamcorper odio, ut tempus elit eleifend eget. Fusce euismod lorem non tincidunt sagittis.
            </div>
        </div>
        
    );
};
export default BO;