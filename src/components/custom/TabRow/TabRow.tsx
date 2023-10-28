import { FC, MouseEventHandler } from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';

import styles from './TabRow.module.css';

export interface TabRowProps {
  text: string;
  isSelected: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TabRow: FC<TabRowProps> = ({ text, isSelected, onClick }) => {

  return (
    <button className={classNames(styles.tab, { [styles.selected]: isSelected })} onClick={onClick}>
      <Typography className={styles.text} variant="body2" component="span">
        {text}
      </Typography>
    </button>
  );
};

export default TabRow;
