import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';

import IUser from 'types/IUser';
import { getFullName } from '../../../../utils/utils';

import styles from './Header.module.css';

export interface HeaderProps {
  user?: IUser;
  email: string;
}

const Header: FC<HeaderProps> = ({ user = {}, email }) => {
  const { avatar, first_name = 'Имя', last_name = 'Фамилия' } = user;
  const name = getFullName(first_name, last_name);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/user');
  };

  return (
    <header onClick={handleClick} className={styles.header}>
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
