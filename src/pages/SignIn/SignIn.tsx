import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Typography, Link as MuiLink } from '@mui/material';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import logo from '@assets/images/logo.svg';
import telegramIcon from '@assets/images/telegramIcon.svg';

import styles from './SignIn.module.css';

const SignIn: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="логотип" />
        </Link>
      </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <Typography className={styles.title} variant="h2" component="h1">
            Карьерный трекер
          </Typography>
          <Typography className={styles.subtitle} variant="body1" color="text.secondary" paragraph={true}>
            Войти в аккаунт
          </Typography>
          <fieldset className={styles.fieldset}>
            <Input type="email" variant="outlined" placeholder="Почта" fullWidth helperText=" " />
            <Input type="password" variant="outlined" placeholder="Пароль" fullWidth helperText=" " />
          </fieldset>
          <MuiLink
            className={styles.button}
            component="button"
            variant="caption"
            underline="none"
            onClick={() => navigate('/reset-password')}
          >
            Не помню пароль
          </MuiLink>
          <Button size="medium" variant="contained" fullWidth>
            Войти
          </Button>
        </form>
      </main>
      <footer className={styles.footer}>
        <MuiLink
          href="https://t.me/+-vjcPXUwa_xlOGM6"
          className={styles.link}
          variant="body2"
          underline="none"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.icon} src={telegramIcon} alt="иконка мессенджера телеграмм" />
          Написать в поддержку
        </MuiLink>
        <Typography variant="body1">&#169; Карьерный трекер, 2023</Typography>
      </footer>
    </div>
  );
};

export default SignIn;
