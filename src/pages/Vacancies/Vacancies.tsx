import { Typography, Tabs, Tab } from '@mui/material';
import styles from './Vacancies.module.css';
import gears from '../../assets/images/sliders.svg';
import { FC, useState } from 'react';
import Button from 'components/Button/Button';
import TabRow from 'components/TabRow/TabRow';
import AI from 'components/AI/AI';
import BlockVacancy from 'components/BlockVacancy/BlockVacancy';

const Vacancies: FC = () => {
  const [tabsValues, setTabsValues] = useState({ first: 0, second: 0 });

  const handleChange = (key: 'first' | 'second', newValue: number) => {
    setTabsValues((prevValues) => ({ ...prevValues, [key]: newValue }));
  };

  //DELETE THIS MASSIVE
  const vacancies = [
    {
      title: 'Графический дизайнер',
      status: 'Опубликовано',
      date: '12 октября',
      city: 'Москва',
      salary: '100 000',
      level: 'Middle',
      experience: 'до 1 года',
    },
    {
      title: 'Веб-разработчик',
      status: 'Опубликовано',
      date: '10 октября',
      city: 'Санкт-Петербург',
      salary: '120 000',
      level: 'Junior',
      experience: 'до 6 месяцев',
    },
    {
      title: 'QA инженер',
      status: 'В поиске',
      date: '14 октября',
      city: 'Казань',
      salary: '90 000',
      level: 'Middle',
      experience: 'до 2 лет',
    },
    {
      title: 'Менеджер проекта',
      status: 'Опубликовано',
      date: '15 октября',
      city: 'Екатеринбург',
      salary: '130 000',
      level: 'Senior',
      experience: 'от 3 до 5 лет',
    },
    {
      title: 'Дизайнер интерфейсов',
      status: 'Опубликовано',
      date: '11 октября',
      city: 'Новосибирск',
      salary: '110 000',
      level: 'Middle',
      experience: 'до 1,5 лет',
    },
    {
      title: 'Android разработчик',
      status: 'В поиске',
      date: '9 октября',
      city: 'Самара',
      salary: '125 000',
      level: 'Middle',
      experience: 'до 3 лет',
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.main__block}>
        <div className={styles.vacancies}>
          <Typography className={styles.vacancies__title} variant="h2" component="h1">
            Мои вакансии
          </Typography>
          <div className={styles.buttons}>
            <Tabs
              value={tabsValues.first}
              onChange={(_, value: number) => handleChange('first', value)}
              aria-label="tabs"
            >
              <Tab
                style={{
                  color: tabsValues.first === 0 ? 'black' : '#797981',
                  fontWeight: tabsValues.first === 0 ? 500 : 400,
                }}
                className={styles.vacancies__tab}
                label="Активные вакансии"
              />
              <Tab
                style={{
                  color: tabsValues.first === 1 ? 'black' : '#797981',
                  fontWeight: tabsValues.first === 1 ? 500 : 400,
                }}
                className={styles.vacancies__tab}
                label="Архив"
              />
            </Tabs>
            <Button variant="contained" size="small" className={styles.button}>
              Создать вакансию
            </Button>
          </div>
          <div className={styles.buttons}>
            <Tabs value={tabsValues.second} aria-label="tabs">
              <TabRow text="Все" isSelected={tabsValues.second === 0} onClick={() => handleChange('second', 0)} />
              <TabRow
                text="Опубликованные"
                isSelected={tabsValues.second === 1}
                onClick={() => handleChange('second', 1)}
              />
              <TabRow text="Скрытые" isSelected={tabsValues.second === 2} onClick={() => handleChange('second', 2)} />
            </Tabs>
            <Button variant="text" endIcon={<img src={gears} alt="gears" />} className={styles.buttonSetting}>
              Фильтры
            </Button>
          </div>
        </div>
        <AI />
        <div className={styles.cardsContainer}>
          {vacancies.map((vacancy, index) => (
            <BlockVacancy key={index} data={vacancy} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Vacancies;
