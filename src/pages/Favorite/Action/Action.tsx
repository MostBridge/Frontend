import { FC } from 'react';
import styles from './Action.module.css';
import { Typography } from '@mui/material';
import Button from 'components/mui/Button/Button';

const Action: FC = () => {
  return (
    <div className={styles.block}>
      <Typography className={styles.title} component='h4' variant='body1'>Действия со списком</Typography>
      <Typography className={styles.subtitle} component='h3' variant='body2'>Отметьте нужных кандидатов и выберите дальнейшее действие</Typography>
      <Button disabled className={styles.buttonFirst} variant='contained' size='small' >Написать кандидатам</Button>
      <Button disabled className={styles.button} variant='outlined' size='small'>Скачать резюме</Button>
      <Button disabled className={styles.button} variant='outlined' size='small'>Ранжировать список</Button>
      <Button disabled className={styles.button} variant='outlined' size='small'>Сравнить кандидатов</Button>
    </div>
  );
};

export default Action;
