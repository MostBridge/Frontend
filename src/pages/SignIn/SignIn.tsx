import { FC } from 'react';

import Button from '@components/Button/Button';

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
