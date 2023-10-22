import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const initialValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    first_name: Yup.string(),
    last_name: Yup.string(),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', values);
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
     <div className='bg-white p-10 rounded shadow-md w-full max-w-md mx-auto border-2 border-purple-500 absolute'>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <p className='mb-4'>Register to unlock a world of online shopping.
             Explore a wide range of products, exclusive offers, and seamless checkout.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label>Email</label>
            <Field type="email" name="email" className = 'block w-full px-4 py-2 rounded border focus:outline-none focus:border-2 focus:border-purple-300' />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" className = 'block w-full px-4 py-2 rounded border focus:outline-none focus:border-2 focus:border-purple-300' />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>First Name</label>
            <Field type="text" name="first_name" className = 'block w-full px-4 py-2 rounded border focus:outline-none focus:border-2 focus:border-purple-300' />
            <ErrorMessage name="first_name" component="div" />
          </div>
          <div>
            <label>Last Name</label>
            <Field type="text" name="last_name" className = 'block w-full px-4 py-2 rounded border focus:outline-none focus:border-2 focus:border-purple-300' />
            <ErrorMessage name="last_name" component="div" />
          </div>
          <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mt-4">Register</button>
        </Form>
      </Formik>
      <p>Have an account already? <Link to = '/signin' className='text-purple-500 font-bold' >Sign In</Link> here</p>
      </div>
    </div>
  );
};

export default Register;


