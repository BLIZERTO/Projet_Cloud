// @ts-ignore 
import React from 'react';
// @ts-ignore 
import Footer from "../components/Footer";
// @ts-ignore 
import CollapsiblePersonalInfo from '../components/UserSSH';
// @ts-ignore
import VolumeList from '../components/Volumes';
// @ts-ignore
import Navigation from '../components/Navigation';



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
                <div className='flex flex-col content'>
                    <VolumeList></VolumeList>
                    <CollapsiblePersonalInfo />
                </div>
            </div>
            <div className='buttons'>
                {/* <Link to="/about">Compte utilisateur</Link> */}
                {/* <Link to="/archives">Ajouter un projet</Link> */}
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Archives;