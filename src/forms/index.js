import React from 'react';
import { Formik } from 'formik';
import { action } from '@storybook/react';

export const BasicForm = ({onError = action('error'), onSubmit = action('submit')}) => (
  <Formik
    initialValues={{ name: 'bart' }}
    onSubmit={(values, actions) => {
      const body = new FormData();
      body.append('file', values.file)
      setTimeout(() => {
        fetch('http://localhost:8000/x308xlx3', {
          method: 'POST',
          body
        });
        if (values.name === 'homer') {
          actions.setErrors({_main: 'something', name: 'Homer is not allowed!'})
          onError()
        } else {
          alert(JSON.stringify(values, null, 2));
          onSubmit(values);
        }
        actions.setSubmitting(false);
      }, 1000);
    }}
    render={props => (
      <form onSubmit={props.handleSubmit}>
        <input id="name" name="name" onChange={props.handleChange} value={props.values.name} />
        {props.errors.name && <div className="error">{props.errors.name}</div>}
        <input id="file" name="file" type="file" onChange={(event) => {
          props.setFieldValue("file", event.currentTarget.files[0]);
        }} />
        {props.errors.file && <div className="error">{props.errors.file}</div>}
        <button type="submit">Submit</button>
      </form>
    )}
  />
);
