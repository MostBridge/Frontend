import Button from '@components/Button/Button';
import { FC } from 'react';

const SignIn: FC = () => {
  return (
    <main>
      <form>
        <Button size="small" variant="contained">
          Войти
        </Button>
      </form>
    </main>
  );
};

export default SignIn;
