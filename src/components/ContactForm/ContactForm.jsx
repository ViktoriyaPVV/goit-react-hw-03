import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    onAddContact({
      ...values,
      id: nanoid(),
    });
    options.resetForm();
  };

  const nameRegex = /^[ a-zA-Z\-\’]+$/;
  const numberRegex = /^[0-9.-]*$/;

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegex, "Invalid name")
      .min(3, "Name is too short!")
      .max(50, "Name should contain max 50 symbols")
      .required("Name is required"),
    number: Yup.string()
      .matches(numberRegex, "Number is invalid")
      .min(3, "Number is too short!")
      .max(50, "Number should contain max 50 symbols")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
