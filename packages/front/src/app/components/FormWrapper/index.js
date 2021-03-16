import React from 'react';
import { Formik } from 'formik';
import { func, shape } from 'prop-types';

const FormWrapper = ({ initialValues, form: Children, onSubmit, validationSchema, ...props }) => (
  <Formik
    initialValues={initialValues}
    enableReinitialize
    onSubmit={onSubmit}
    validateOnMount={false}
    validationSchema={validationSchema}>
    {({ handleChange, handleSubmit, values, errors, setFieldValue, submitCount }) => (
      <form className="full-width" onSubmit={handleSubmit}>
        <Children
          values={values}
          onChange={handleChange}
          errors={submitCount > 0 && errors}
          setFieldValue={setFieldValue}
          submitCount={submitCount}
          {...props}
        />
      </form>
    )}
  </Formik>
);

FormWrapper.propTypes = {
  form: shape,
  initialValues: shape,
  validationSchema: shape,
  onSubmit: func
};

export default FormWrapper;
