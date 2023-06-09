// @ts-ignore 
import React from 'react';
// @ts-ignore 
import Footer from "../components/Footer";
// @ts-ignore
import Volumes from '../components/Volumes';
// @ts-ignore
import Navigation from '../components/Navigation';
import '../index.css';



const Archives = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='avatar'>
                <img src="./assets/Ellipse_2avatar.png" alt="Logo" />
            </div>
            <div>
                <h1 className='titre'><b>Archives</b></h1>
            </div>
            <div className='flex flex-row presentation'>
                <div className='flex'>
                    <Volumes></Volumes>
                </div>
            </div>
            <div className='buttons'>    
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Archives;