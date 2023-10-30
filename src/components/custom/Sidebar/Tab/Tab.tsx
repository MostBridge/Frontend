import { FC, MouseEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import classNames from 'classnames';

import styles from './Tab.module.css';

export interface TabProps {
  icon: string;
  text: string;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Tab: FC<TabProps> = ({ icon, text, to, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSelected = location.pathname === to;
  const handleClick = to ? () => navigate(to) : onClick;

  return (
    <button className={classNames(styles.tab, { [styles.selected]: isSelected })} onClick={handleClick}>
      <img className={styles.icon} src={icon} alt={text} />
      <Typography className={styles.text} variant="body1" component="span">
        {text}
      </Typography>
    </button>
  );
};

export default Tab;
