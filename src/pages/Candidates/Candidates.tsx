import { ChangeEvent, FC, useState } from 'react';

import { SelectChangeEvent, Typography } from '@mui/material';

import IFilters from 'src/types/IFilters';
import { VACANCIES_LIST } from 'utils/constants';

import FiltersForm from './FiltersForm/FiltersForm';
import styles from './Candidates.module.css';

const Candidates: FC = () => {
  const [filters, setFilters] = useState<IFilters>({ vacancyId: 0, search: '' });

  const handleVacancyChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    setFilters({ vacancyId: value, ...filters });
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilters({ search: value, ...filters });
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
      </main>
    </div>
  );
};

export default Candidates;
