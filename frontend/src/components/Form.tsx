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
                <Form className="form">

                    <label htmlFor="email">Email Address</label>
                    <Field id="email" name="email"/>
                    <ErrorMessage name="email" />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" />
                    <ErrorMessage name="password" />

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;