import { Typography, Tabs, Tab } from '@mui/material';
import styles from './Vacancies.module.css';
import gears from '../../assets/images/sliders.svg';
import { useState } from 'react';
import Button from 'components/Button/Button'; 
import TabRow from 'components/TabRow/TabRow';
import AI from 'components/AI/AI';

const Vacancies = () => {
  const [tabsValues, setTabsValues] = useState({ first: 0, second: 0 });

  const handleChange = (key: 'first' | 'second', newValue: number) => {
    setTabsValues((prevValues) => ({ ...prevValues, [key]: newValue }));
  };

  return (
    <main className={styles.main}>
      <div className={styles.vacancies}>
        <Typography className={styles.vacancies__title} variant="h2" component="h1">
          Мои вакансии
        </Typography>
        <div className={styles.buttons}>
          <Tabs value={tabsValues.first} onChange={(_, value: number) => handleChange('first', value)} aria-label="tabs">
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
        <Tabs value={tabsValues.first} aria-label="tabs">
          <TabRow text="Все" isSelected={tabsValues.second === 0}  onClick={() => handleChange('second', 0)}/>
          <TabRow text="Опубликованные" isSelected={tabsValues.second === 1} onClick={() => handleChange('second', 1)}/>
          <TabRow text="Скрытые" isSelected={tabsValues.second === 2} onClick={() => handleChange('second', 2)}/>
        </Tabs>
        <Button variant="text" endIcon={<img src={gears} alt="gears" />} className={styles.buttonSetting}>
            Фильтры
          </Button>
        </div> 
      </div>
      <AI />
    </main>
  );
};

export default Vacancies;
