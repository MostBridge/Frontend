import { FC } from 'react';
import { ButtonProps } from '@mui/material';

import Button from 'components/mui/Button/Button';
import Icon from 'components/mui/Icon/Icon';

import styles from './IconButton.module.css';

export interface IconButtonProps extends ButtonProps {
  icon: string;
  alt: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, alt, children, ...props }) => (
  <Button
    disableRipple
    className={styles.button}
    variant="text"
    endIcon={<Icon className={styles.icon} src={icon} alt={alt} />}
    {...props}
  >
    {children}
  </Button>
);

export default IconButton;
