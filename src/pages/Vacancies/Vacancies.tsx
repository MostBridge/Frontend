import {Typography, Stack, Tabs, Tab} from '@mui/material';
import styles from './Vacancies.module.css';
import UpIcon from '@assets/images/up.svg';
import Strange from '@assets/images/strange.svg';
import Button from '@components/Button/Button';
import { useState } from 'react';

const Vacancies = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main>
      <div className={styles.vacancies}>
      <Typography className={styles.vacancies__title} variant="h2" component="h1">
           Мои вакансии
      </Typography>

      <Tabs className={styles.vacancies__tabs} value={value} onChange={handleChange} aria-label="tabs">
      <Tab 
       style={{ color: value === 0 ? 'black' : '#797981', fontWeight: value === 0 ? 500 : 400}} 
      className={styles.vacancies__tab} label="Активные вакансии" />
      <Tab 
       style={{ color: value === 1 ? 'black' : '#797981',  fontWeight: value === 1 ? 500 : 400 }} 
      className={styles.vacancies__tab} label="Архив" />
    </Tabs>

      <Stack direction="row" spacing={2.5}>
        <Button variant="outlined">
        Все
        </Button>
        <Button variant="outlined" endIcon={<img src={UpIcon} alt="Up icon" />}>
        Опубликованные вакансии
        </Button>
        <Button variant="outlined" endIcon={<img src={Strange} alt="strange" />}>
        Скрытые вакансии
        </Button>
    </Stack>
     
      </div>
    </main>
  );
};

export default Vacancies;