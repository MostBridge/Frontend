import { ChangeEvent, FC, useState } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';

import { CANDIDATES_LIST, VACANCIES_LIST } from 'utils/constants';
import IFilters from 'types/IFilters';

import FiltersForm from './FiltersForm/FiltersForm';
import styles from './Candidates.module.css';
import Results from './Results/Results';

const Candidates: FC = () => {
  const [filters, setFilters] = useState<IFilters>({ vacancyId: 0, search: '' });

  const handleVacancyChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    setFilters({ ...filters, vacancyId: value });
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilters({ ...filters, search: value });
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
          filters={filters}
          onChange={handleVacancyChange}
          onInput={handleSearchInput}
        />
        <Results candidates={CANDIDATES_LIST} />
      </main>
    </div>
  );
};

export default Candidates;
