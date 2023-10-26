import back from '../../assets/images/banner1.png'
import styles from './AI.module.css';
import { Typography } from '@mui/material';
import Button from 'components/Button/Button';

function AI() {
  return (
    <div className={styles.ai}>
       <img src={back} alt='background' />
       <div className={styles.ai__block}>
       <Typography className={styles.title} variant="h2" component="h2" color="text.primary">Голосовой помощник по созданию вакансии</Typography>
       <Button size='small' variant='outlined'>Попробовать</Button>
       </div>
    </div>
  )
}

export default AI;