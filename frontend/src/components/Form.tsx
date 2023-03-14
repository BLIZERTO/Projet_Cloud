// @ts-ignore 
import React from "react";
// @ts-ignore 
import { Formik, Form, Field, ErrorMessage } from 'formik';
// @ts-ignore 
import * as Yup from 'yup';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import axios from 'axios';
import '../index.css';

interface FormValues {
    password: string;
    email: string;
    avatar: string;
}

const MyForm = () => {
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

    // const onSubmit = async (values: FormValues) => {
    //     try {
    //         const response = await axios('http://localhost:4000/api/login', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(values),
    //         });
            
    //         if (!response.ok) {
    //             throw new Error('Failed to submit form');
    //         }
    //         else {
    //             navigate('/BO');
    //             console.log('Form submitted successfully');
    //         }
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleSubmit = async (values: FormValues, { setSubmitting, setStatus }) => {
        try {
          const response = await axios.post('http://localhost:4000/api/login', values);
          if (response.data.success) {
            setStatus({ success: true });
            navigate('/BO');
          } else {
            console.log(response)
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
                        <button className="main_button" type="submit" disabled={isSubmitting}>
                            Inscription
                        </button>
                    </div>
                    {status && status.error && <div className="error_message">{status.error}</div>}
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;