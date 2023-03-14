// @ts-ignore 
import React from 'react';
// @ts-ignore 
import MyForm from "../components/Form";

const Home = () => {
    return (
        <div className="home_container">
            <div className="form_container">
                <img src="./assets/logo.svg" alt="Logo" />
                <MyForm></MyForm>
            </div>
        </div>
    );
};

export default Home;