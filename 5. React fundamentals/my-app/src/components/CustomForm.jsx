import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

const CustomForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='m-4 px-20 text-white'>
        <Formik
          initialValues={{ name: "", email: ""}}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Email is invalid").required("Email is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form Submitted", values);
            setSubmitted(true);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form-container">
              <div className='m-4'>
                <label>Name </label>
                <Field type="text" name="name" className="px-3 py-1.5 w-4/5 mx-2 border rounded-full border-white"/>
                <ErrorMessage name="name" component="div" className="error text-red-400" />
              </div>

              <div className='m-4'>
                <label>Email </label>
                <Field type="email" name="email" className="px-3 py-1.5 w-4/5 mx-2 border rounded-full border-white"/>
                <ErrorMessage name="email" component="div" className="error text-red-400" />
              </div>

              <div className='flex justify-evenly space-x-4'>
                <Button
                  title="Submit"
                  className=""
                  type="submit"
                  disabled={isSubmitting}
                />
                {submitted && <span className='pt-6 text-green-600'>Form submitted!</span>}
              </div>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default CustomForm