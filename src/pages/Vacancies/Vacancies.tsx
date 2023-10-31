import { Typography, Tabs, Tab } from '@mui/material';
import styles from './Vacancies.module.css';
import gears from 'assets/images/sliders.svg';

import { FC, useState } from 'react';
import Button from 'components/mui/Button/Button';
import TabRow from 'components/custom/TabRow/TabRow';
import AI from 'components/custom/AI/AI';
import BlockVacancy from 'components/custom/BlockVacancy/BlockVacancy';
import { Link } from 'react-router-dom';
import Filters from 'components/custom/Filters/Filters';
import { vacancies } from 'utils/constants';
import IconButton from 'components/mui/IconButton/IconButton';
import { useGetVacanciesQuery } from '../../redux/slices/API';

const Vacancies: FC = () => {
  const { data: res } = useGetVacanciesQuery();
  const [tabsValues, setTabsValues] = useState({ first: 0, second: 0 });
  const [isPopupFilterOpen, setIsPopupFilterOpen] = useState(false);
  console.log(res);

  const handleChange = (key: 'first' | 'second', newValue: number) => {
    setTabsValues((prevValues) => ({ ...prevValues, [key]: newValue }));
  };

  const handleOpenPopup = () => {
    setIsPopupFilterOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupFilterOpen(false);
  };

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
            <Link to="/create-vacancy">
              <Button variant="contained" size="small" className={styles.button}>
                Создать вакансию
              </Button>
            </Link>
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
            <IconButton endIcon={gears} onClick={handleOpenPopup} alt="Иконка фильтров">
              Фильтры
            </IconButton>
          </div>
        </div>
        <AI />
        <div className={styles.cardsContainer}>
          {vacancies.map((vacancy, index) => (
            <BlockVacancy key={index} data={vacancy} />
          ))}
        </div>
      </div>
      {isPopupFilterOpen && <Filters onClose={handleClosePopup} isPopupFilterOpen={isPopupFilterOpen} />}
    </main>
  );
};

export default Vacancies;
