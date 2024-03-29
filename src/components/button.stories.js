import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './button';

storiesOf('Button', module)
  .add('default', () => <Button>Default Button (red bg)</Button>)
  .add('with style', () => <Button custom>Custom Button</Button>)

