import React from 'react';
import classnames from 'classnames';
import styles from './button.css';

export default function Button({ children, className, custom }) {
  const classes = classnames(styles.button, className, {
    [styles.custom]: custom
  });
  return <button className={classes} custom={custom}>{children}</button>
}
