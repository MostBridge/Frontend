import { Typography, Tabs, Tab } from '@mui/material';
import styles from './Vacancies.module.css';
import gears from '@assets/images/sliders.svg';
import Button from '@components/Button/Button';
import { useState } from 'react';

const Vacancies = () => {
  const [tabsValues, setTabsValues] = useState({ first: 0, second: 0 });

  const handleChange = (key: 'first' | 'second') => (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTabsValues((prevValues) => ({ ...prevValues, [key]: newValue }));
  };

  return (
    <main>
      <div className={styles.vacancies}>
        <Typography className={styles.vacancies__title} variant="h2" component="h1">
          Мои вакансии
        </Typography>
        <div className={styles.buttons}>
          <Tabs value={tabsValues.first} onChange={handleChange('first')} aria-label="tabs">
            <Tab
              style={{ color: tabsValues.first === 0 ? 'black' : '#797981', fontWeight: tabsValues.first === 0 ? 500 : 400 }}
              className={styles.vacancies__tab}
              label="Активные вакансии"
            />
            <Tab
              style={{ color: tabsValues.first === 1 ? 'black' : '#797981', fontWeight: tabsValues.first === 1 ? 500 : 400 }}
              className={styles.vacancies__tab}
              label="Архив"
            />
          </Tabs>
          <Button variant="contained" size="small" className={styles.button}>
            Создать вакансию
          </Button>
        </div>
        <div className={styles.buttons}>
          <Tabs value={tabsValues.second} onChange={handleChange('second')} aria-label="tabs" TabIndicatorProps={{ style: { display: 'none' } }}>
            <Tab style={{ backgroundColor: tabsValues.second === 0 ? '#ACCCFF' : '#F1F6FF', color: 'black'}} className={styles.buttonFilter} label="Все" />
            <Tab style={{ backgroundColor: tabsValues.second === 1 ? '#ACCCFF' : '#F1F6FF', color: 'black'}} className={styles.buttonFilter} label="Опубликованные" />
            <Tab style={{ backgroundColor: tabsValues.second === 2 ? '#ACCCFF' : '#F1F6FF', color: 'black'}} className={styles.buttonFilter} label="Скрытые" />
          </Tabs>
          <Button variant="text" endIcon={<img src={gears} alt="gears" />} className={styles.buttonSetting}>
            Фильтры
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Vacancies;
