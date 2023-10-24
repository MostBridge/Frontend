import { FC } from 'react';

import Form from '@components/Form/Form';

import styles from './SignIn.module.css';

const SignIn: FC = () => {
  return (
    <main>
      <Form title="Карьерный трекер" button="Войти"></Form>
    </main>
  );
};

export default SignIn;
