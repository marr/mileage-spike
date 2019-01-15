import React from 'react';
import { Formik } from 'formik';
import { action } from '@storybook/react';

export const BasicForm = ({onError = action('error'), onSubmit = action('submit')}) => (
  <Formik
    initialValues={{ name: 'bart' }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
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
        <input
          type="text"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.name}
          name="name"
        />
        <input id="file" name="file" type="file" onChange={(event) => {
          props.setFieldValue("file", event.currentTarget.files[0]);
        }} />
        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
        <button type="submit">Submit</button>
      </form>
    )}
  />
);
