import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        phone_number: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            phone_number: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/contact/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    alert('Message sent successfully!');
                    formik.resetForm();
                } else {
                    alert('Message could not be sent.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
    });

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-purple-300 ${
                            formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-purple-300'
                        }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 mt-1">{formik.errors.name}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone_number" className="block text-gray-600">Phone Number</label>
                    <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-purple-300 ${
                            formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : 'border-purple-300'
                        }`}
                    />
                    {formik.touched.phone_number && formik.errors.phone_number && (
                        <div className="text-red-500 mt-1">{formik.errors.phone_number}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-purple-300 ${
                            formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-purple-300'
                        }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 mt-1">{formik.errors.email}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-600">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-2 focus:border-purple-300 ${
                            formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-purple-300'
                        }`}
                    ></textarea>
                    {formik.touched.message && formik.errors.message && (
                        <div className="text-red-500 mt-1">{formik.errors.message}</div>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-purple-500 text-white py-2 px-4 rounded-md font-bold hover:bg-white hover:text-purple-500 hover:border hover:border-purple-500 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;

