{/*import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signin/', values);
      console.log('Signin successful', response.data);
    } catch (error) {
      console.error('Signin failed', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md mx-auto border-2 border-purple-500 mb-20">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <p className='mb-4'>Sign in to your account and unlock a world of online shopping.
             Explore a wide range of products, exclusive offers, and seamless checkout. Your next shopping adventure awaits!</p>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="mb-4">
              <label>Email</label>
              <Field type="email" name="email" className="block w-full px-4 py-2 rounded border focus:outline-none focus:border-2 focus:border-purple-300" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <Field type="password" name="password" className="block w-full px-4 py-2 rounded border" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Sign In
            </button>
          </Form>
        </Formik>
        <p className='mt-4'>Don't have an account yet, <Link className='text-purple-500 font-bold' to='/register'>Register</Link> here</p>
      </div>
    </div>
  );
};

export default SignIn;*/}




import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signin/', values);
      console.log('Signin successful', response.data);

      // Set the showSuccessAlert state to true
      setShowSuccessAlert(true);

      // Redirect to the previous location or a default location
      navigate(-1);
    } catch (error) {
      console.error('Signin failed', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md mx-auto border-2 border-purple-500 mb-20">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        {showSuccessAlert && (
          <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
            <div className="flex items-start gap-4">
              <span className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Changes saved </strong>
                <p className="mt-1 text-sm text-gray-700">
                  Your sign-in was successful.
                </p>
              </div>
              <button
                className="text-gray-500 transition hover:text-gray-600"
                onClick={() => setShowSuccessAlert(false)}
              >
                <span className="sr-only">Dismiss popup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <p className='mb-4'>Sign in to your account and unlock a world of online shopping.
          Explore a wide range of products, exclusive offers, and seamless checkout. Your next shopping adventure awaits!
        </p>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="mb-4">
              <label>Email</label>
              <Field type="email" name="email" className="block w-full px-4 py-2 rounded border focus:outline-none focus:border-2 focus:border-purple-300" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <Field type="password" name="password" className="block w-full px-4 py-2 rounded border" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover-bg-purple-600">
              Sign In
            </button>
          </Form>
        </Formik>
        <p className='mt-4'>Don't have an account yet, <Link className='text-purple-500 font-bold' to='/register'>Register</Link> here</p>
      </div>
    </div>
  );
};

export default SignIn;




//stunner5@gmail.com
//stunnerpwd

