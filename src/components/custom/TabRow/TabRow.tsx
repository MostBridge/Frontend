import { FC, MouseEventHandler } from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';

import styles from './TabRow.module.css';

export interface TabRowProps {
  className?: string;
  text: string;
  isSelected?: boolean;
  color?: 'primary' | 'secondary' | 'light';
  size?: 'medium' | 'small';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TabRow: FC<TabRowProps> = ({ className, text, color = 'primary', size = 'medium', isSelected, onClick }) => {
  return (
    <button
      className={classNames(styles.tab, { [styles.selected]: isSelected }, styles[color], styles[size], className)}
      onClick={onClick}
    >
      <Typography className={styles.text} variant={size === 'medium' ? 'body2' : 'caption'} component="span">
        {text}
      </Typography>
    </button>
  );
};

export default TabRow;
