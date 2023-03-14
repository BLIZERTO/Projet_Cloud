// @ts-ignore 
import React from "react";
// @ts-ignore 
import { Formik, Form, Field, ErrorMessage } from 'formik';
// @ts-ignore 
import * as Yup from 'yup';
import '../index.css';

interface FormValues {
    password: string;
    email: string;
    avatar: string;
}

const initialValues: FormValues = {
    password: '',
    email: '',
    avatar: '',
};

const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email address').required('Required'),
});

const onSubmit = async (values: FormValues) => {
    try {
        const response = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });
        console.log(response)
        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully');
    } catch (error) {
        console.error(error);
    }
};

const MyForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="main_form">
                    <div className="input_container">
                        <label className="label" htmlFor="email">Email</label>
                        <Field className="input" placeholder="Email" id="email" name="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="password">Password</label>
                        <Field className="input" placeholder="Password" id="password" name="password" />
                        <ErrorMessage name="password" />
                    </div>
                    <div className="button_container">
                        <button className="main_button" type="submit" disabled={isSubmitting}>
                            Connexion
                        </button>
                        <button className="main_button" type="submit" disabled={isSubmitting}>
                            Inscription
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;