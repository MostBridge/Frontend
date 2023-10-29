import { FC } from 'react';
import { Avatar, Typography } from '@mui/material';
import IUser from 'types/IUser';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export interface HeaderProps {
  user?: IUser;
}

const Header: FC<HeaderProps> = ({ user = {} }) => {
  const { avatar, firstName = 'Имя', lastName = 'Фамилия', email = 'example@yandex.ru' } = user;
  const fullName = `${firstName} ${lastName}`;

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/user');
  };

  return (
    <header onClick={handleClick} className={styles.header}>
      <Avatar src={avatar} className={styles.avatar} />
      <div className={styles.profile}>
        <Typography variant="body1" component="h2" color="primary.contrastText">
          {fullName}
        </Typography>
        <Typography variant="body2" component="p" color="primary.contrastText">
          {email}
        </Typography>
      </div>
    </header>
  );
};

export default Header;
