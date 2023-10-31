import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Typography, Link as MuiLink } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';

import Button from 'components/mui/Button/Button';
import Input from 'components/mui/Input/Input';
import logo from 'assets/images/logo.svg';
import telegramIcon from 'assets/images/telegramIcon.svg';

import styles from './SignIn.module.css';
import { LoginParams, useLoginMutation } from '../../redux/slices/API';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../redux/slices/Profile';

const SignIn: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginParams>()
  const { ref: emailRef, ...emailProps } = register("email");
  const { ref: passwordRef, ...passwordProps } = register("password");

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await login({ email: data.email, password: data.password });
      if ('data' in result) {
        // Save tokens in localStorage
        localStorage.setItem('accessToken', result.data.access);
        localStorage.setItem('refreshToken', result.data.refresh);
        dispatch(setEmail(data.email));
        navigate('/')
      } else {
        console.log(result.error)
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="логотип" />
        </Link>
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography className={styles.title} variant="h2" component="h1">
            Карьерный трекер
          </Typography>
          <Typography className={styles.subtitle} variant="body1" color="text.secondary" paragraph={true}>
            Войти в аккаунт
          </Typography>
          <fieldset className={styles.fieldset}>
            <Input inputRef={emailRef} {...emailProps} size="medium" type="email" variant="outlined" placeholder="Почта" fullWidth helperText=" " />
            <Input inputRef={passwordRef} {...passwordProps} size="medium" type="password" variant="outlined" placeholder="Пароль" fullWidth helperText=" " />
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
          <Button size="medium" variant="contained" fullWidth type='submit'>
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
