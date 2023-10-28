import { FC } from 'react';
import Link from '@mui/material/Link';
import arrow_left from 'assets/images/arrow_left.svg';
import styles from './BackButton.module.css';

type BackButtonProps = {
  to: string;
};

const BackButton: FC<BackButtonProps> = ({ to }) => {
  return (
    <Link className={styles.button} href={to}>
      <img src={arrow_left} alt="Стрека назад" />
      Назад
    </Link>
  );
};

export default BackButton;
