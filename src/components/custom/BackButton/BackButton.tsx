import { FC } from 'react';
import Link from '@mui/material/Link';
import arrow_left from 'assets/images/arrow_left.svg';
import styles from './BackButton.module.css';
import { Typography } from '@mui/material';

type BackButtonProps = {
  onBack: () => void;
};

const BackButton: FC<BackButtonProps> = ({ onBack }) => {
  return (
    <Link className={styles.button} onClick={onBack}>
      <img src={arrow_left} alt="Стрека назад" />
      <Typography className={styles.text} variant="body1" component="p">
        Назад
      </Typography>
    </Link>
  );
};

export default BackButton;
