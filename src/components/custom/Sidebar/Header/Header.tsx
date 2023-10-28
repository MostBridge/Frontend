import { FC } from 'react';
import { Avatar, Typography } from '@mui/material';

import IUser from 'types/IUser';
import { getFullName } from 'utils/utils';

import styles from './Header.module.css';

export interface HeaderProps {
  user?: IUser;
}

const Header: FC<HeaderProps> = ({ user = {} }) => {
  const { avatar, first_name = 'Имя', last_name = 'Фамилия', email = 'example@yandex.ru' } = user;
  const name = getFullName(first_name, last_name);

  return (
    <header className={styles.header}>
      <Avatar src={avatar} className={styles.avatar} />
      <div className={styles.profile}>
        <Typography variant="body1" component="h2" color="primary.contrastText">
          {name}
        </Typography>
        <Typography variant="body2" component="p" color="primary.contrastText">
          {email}
        </Typography>
      </div>
    </header>
  );
};

export default Header;
