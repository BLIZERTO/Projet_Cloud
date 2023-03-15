// @ts-ignore 
import React from 'react';
// @ts-ignore 
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    return (
        <div className="home_container">
            <div className="form_container">
                <img src="./assets/logo.svg" alt="Logo" />
                <RegisterForm></RegisterForm>
            </div>
        </div>
    );
};

export default Register;