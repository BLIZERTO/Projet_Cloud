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
            <div className='flex justify-start container'>
                <h1 className='titre'>Accueil</h1>
                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                 galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                 the leap i.</p>
            </div>
        </div>
        
    );
};
export default BO;