import { FC } from 'react';
import Link from '@mui/material/Link';
import arrow_left from 'assets/images/arrow_left.svg';
import styles from './BackButton.module.css';
import { Typography } from '@mui/material';

type BackButtonProps = {
  to: string;
};

const BackButton: FC<BackButtonProps> = ({ to }) => {
  return (
    <Link className={styles.button} href={to}>
      <img src={arrow_left} alt="Стрека назад" />
      <Typography className={styles.text} variant="h3" component="p">
        Назад
      </Typography>
    </Link>
  );
};

export default BackButton;