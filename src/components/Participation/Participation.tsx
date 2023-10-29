import { Typography } from '@mui/material';
import { FC } from 'react';
import styles from './Participation.module.css';
import Button from 'components/Button/Button';

type ParticipationProps = {
    title: string;
    name: string;
    achievement: string;
  };

const Participation: FC<ParticipationProps> = ({ title, name, achievement }) => {
  return (
    <div className={styles.card}>
      <div>
        <Typography className={styles.title} variant="body1" component="h3">
          {title}
        </Typography>
        <div className={styles.paragraphBlock}>
          <Typography variant="caption" component="p">
           {name}
          </Typography>
          <Typography className={styles.paragraph} variant="caption" component="p">
            {achievement}
          </Typography>
        </div>
      </div>
      <div>
        <Button variant='contained' className={styles.button} size='small'>Figma-файл</Button>
        <Button variant='contained' className={`${styles.button} ${styles.button_type_last}`} size='small'>Кейс в портфолио</Button>
      </div>
    </div>
  );
};

export default Participation;
