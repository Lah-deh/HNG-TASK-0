import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Formm = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <main className="contact-page" data-testid="test-contact-page">

      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setSubmitted(true);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="contact-form"
            aria-label="Contact form"
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                data-testid="test-contact-name"
                aria-describedby="error-name"
              />
              <ErrorMessage
                name="name"
                component="span"
                className="error"
                id="error-name"
                data-testid="test-contact-error-name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                data-testid="test-contact-email"
                aria-describedby="error-email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error"
                id="error-email"
                data-testid="test-contact-error-email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <Field
                id="subject"
                name="subject"
                type="text"
                data-testid="test-contact-subject"
                aria-describedby="error-subject"
              />
              <ErrorMessage
                name="subject"
                component="span"
                className="error"
                id="error-subject"
                data-testid="test-contact-error-subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field
                id="message"
                name="message"
                as="textarea"
                rows="5"
                data-testid="test-contact-message"
                aria-describedby="error-message"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="error"
                id="error-message"
                data-testid="test-contact-error-message"
              />
            </div>

            <button type="submit" data-testid="test-contact-submit">
              Submit
            </button>

            {submitted && (
              <p
                className="success"
                data-testid="test-contact-success"
                role="status"
              >
                Thank you 😍, Your message has been received successfully.
              </p>
            )}
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Formm;
