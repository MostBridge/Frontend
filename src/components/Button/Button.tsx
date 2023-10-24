import { FC } from 'react';
import classNames from 'classnames';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material';

import styles from './Button.module.css';

const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <MuiButton color="primary" variant="contained">
      {children}
    </MuiButton>
  );
};

export default Button;
