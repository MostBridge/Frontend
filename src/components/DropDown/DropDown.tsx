import { FC, MouseEventHandler } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import classNames from 'classnames';

import styles from './DropDown.module.css';

export interface DropDownProps {
  text: string;
  icon: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  closeMenu: () => void;
}

const DropDown: FC<DropDownProps> = ({ alt, text, icon, onClick, closeMenu }) => {

    return (
          <MenuItem className={styles.item} onClick={closeMenu}>
            {text}
            <img className={styles.icon} src={icon} alt={alt} />
          </MenuItem>
      );
};

export default DropDown;