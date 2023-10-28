import { ChangeEvent, FC, useState } from 'react';

import { SelectChangeEvent, Typography } from '@mui/material';

import { VACANCIES_LIST } from 'utils/constants';

import FiltersForm from './FiltersForm/FiltersForm';
import styles from './Candidates.module.css';

const Candidates: FC = () => {
  const [vacancyId, setVacancyId] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  const handleVacancyChange = (event: SelectChangeEvent<number>) => {
    setVacancyId(event.target.value as number);
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target?.value);
  };

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Typography className={styles.title} variant="h2" component="h1">
          Поиск кандидатов
        </Typography>
        <FiltersForm
          className={styles.navigation}
          vacancies={VACANCIES_LIST}
          filters={{ vacancyId, search }}
          onChange={handleVacancyChange}
          onInput={handleSearchInput}
        />
      </main>
    </div>
  );
};

export default Candidates;
