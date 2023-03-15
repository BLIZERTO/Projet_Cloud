// @ts-ignore 
import React from 'react';
// @ts-ignore 
import LoginForm from "../components/LoginForm";
// @ts-ignore 
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home_container">
            <div className="form_container">
                <img src="./assets/logo.svg" alt="Logo" />
                <LoginForm></LoginForm>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;