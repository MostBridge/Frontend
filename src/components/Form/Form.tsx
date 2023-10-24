import { FC, HTMLProps, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

import Button from '@components/Button/Button';

import styles from './Form.module.css';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  title?: string;
  subtitle?: string;
  button?: string;
}

const Form: FC<FormProps> = ({ title, subtitle, button, children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      {title && (
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      )}
      {subtitle && <p>{subtitle}</p>}
      {children}
      <Button type="submit">{button}</Button>
    </form>
  );
};

export default Form;
