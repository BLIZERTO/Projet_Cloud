// @ts-ignore 
import React from 'react';
// @ts-ignore 
import Footer from "../components/Footer";
// @ts-ignore 
import CollapsiblePersonalInfo from '../components/UserSSH';




const Archives = () => {
    
  
    return (
        <div>
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