import { FC } from 'react';
import { ButtonProps } from '@mui/material';
import classNames from 'classnames';

import Button from 'components/mui/Button/Button';
import Icon from 'components/mui/Icon/Icon';

import styles from './IconButton.module.css';

export interface IconButtonProps extends ButtonProps {
  startIcon?: string;
  endIcon?: string;
  alt: string;
}

const IconButton: FC<IconButtonProps> = ({ alt, children, className, startIcon, endIcon, ...props }) => (
  <Button
    disableRipple
    className={classNames(styles.button, className)}
    variant="text"
    startIcon={startIcon ? <Icon className={styles.icon} src={startIcon} alt={alt} /> : null}
    endIcon={endIcon ? <Icon className={styles.icon} src={endIcon} alt={alt} /> : null}
    {...props}
  >
    {children}
  </Button>
);

export default IconButton;
