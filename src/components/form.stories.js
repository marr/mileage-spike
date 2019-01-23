import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { BasicForm } from '../forms';

storiesOf('BasicForm', module)
  .add('default', () => <BasicForm />)
  .add('custom Submit action', () => <BasicForm onError={action('👺 Form error.')} onSubmit={action('custom submit')}/>);
