import React from 'react';
import { Formik } from 'formik';
import { action } from '@storybook/react';

export const BasicForm = ({onError = action('error'), onSubmit = action('submit')}) => (
  <Formik
    initialValues={{ name: 'bart' }}
    onSubmit={(values, actions) => {
      const formData = new FormData();
      formData.append(values.file);
    }}
    render={props => (
      <form onSubmit={props.handleSubmit}>
        <input id="file" name="file" type="file" onChange={(event) => {
          props.setFieldValue("file", event.currentTarget.files[0]);
        }} />
        {props.errors.file && <div id="feedback">{props.errors.file}</div>}
      </form>
    )}
  />
);
