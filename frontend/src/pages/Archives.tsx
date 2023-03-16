// @ts-ignore 
import React, { useState, useEffect } from 'react';
// @ts-ignore 
import Footer from "../components/Footer";
// @ts-ignore 
import CollapsiblePersonalInfo from '../components/UserSSH';
//@ts-ignore
import axios from 'axios';



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