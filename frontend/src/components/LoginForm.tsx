// @ts-ignore 
import React from "react";
// @ts-ignore 
import { Formik, Form, Field, ErrorMessage } from 'formik';
// @ts-ignore 
import * as Yup from 'yup';
// @ts-ignore
import { useNavigate, Link } from 'react-router-dom';
// @ts-ignore
import axios from 'axios';
import '../index.css';

interface FormValues {
    password: string;
    email: string;
    avatar: string;
}

const LoginForm = () => {
    const navigate = useNavigate();

    const initialValues: FormValues = {
        password: '',
        email: '',
        avatar: '',
    };
    
    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        email: Yup.string().email('Invalid email address').required('Required'),
    });

    const handleSubmit = async (values: FormValues, { setSubmitting, setStatus }) => {
        try {
          const response = await axios.post('http://localhost:4000/api/login', values);
          console.log(response)
          if (response.data.token && response.data.token.length > 0) {
            setStatus({ success: true });
            navigate('/bo');
          } else {
            setStatus({ error: 'Incorrect username or password' });
          }
        } catch (error) {
          setStatus({ error: 'An error occurred while logging in' });
        }
        setSubmitting(false);
      };

      const handleRegister = async (values: FormValues, { setSubmitting, setStatus }) => {
        try {
          const response = await axios.post('http://localhost:4000/api/register', values);
          console.log(response)
          if (response.data.token && response.data.token.length > 0) {
            setStatus({ success: true });
            
          } else {
            setStatus({ error: 'Incorrect username or password' });
          }
        } catch (error) {
          setStatus({ error: 'An error occurred while logging in' });
        }
        setSubmitting(false);
      };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
             {({ isSubmitting, status }) => (
                <Form className="main_form">
                    <div className="input_container">
                        <label className="label" htmlFor="email">Email</label>
                        <Field className="input" placeholder="Email" id="email" name="email" />
                        <ErrorMessage component="div" className="error_message" name="email" />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="password">Password</label>
                        <Field className="input" placeholder="Password" id="password" name="password" />
                        <ErrorMessage component="div" className="error_message" name="password" />
                    </div>
                    <div className="button_container">
                        <button className="main_button" type="submit" disabled={isSubmitting}>
                            Connexion
                        </button>
                        <Link className="main_button center" to="/register">Inscription</Link>
                    </div>
                    {status && status.error && <div className="error_message">{status.error}</div>}
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;