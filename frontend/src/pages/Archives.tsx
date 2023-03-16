// @ts-ignore 
import React from 'react';
// @ts-ignore 
import Footer from "../components/Footer";
// @ts-ignore 
import CollapsiblePersonalInfo from '../components/UserSSH';
// @ts-ignore
import VolumeList from '../components/Volumes';



const Archives = () => {
    
  
    return (
        <div>
            <VolumeList></VolumeList>
            <CollapsiblePersonalInfo  />
            {/* {personalInfo ? (
                <CollapsiblePersonalInfo  />
            ) : (
                <p>Loading personal information...</p>
            )} */}
            <Footer />
        </div>
    );
};

export default Archives;