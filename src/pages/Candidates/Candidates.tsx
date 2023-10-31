import { ChangeEvent, FC, useState } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';

import { VACANCIES_LIST } from '../../utils/constants';
import IFilters from 'types/IFilters';

import FiltersForm from '../../components/custom/FiltersForm/FiltersForm';
import styles from './Candidates.module.css';
import Results from '../../components/custom/Results/Results';
import { useGetCandidatesQuery } from '../../redux/slices/API';
// import Board from './Board/Board';

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

  const getCandidatesQuery = useGetCandidatesQuery()
  const candidatesList = getCandidatesQuery.data?.results || []
  const count = getCandidatesQuery.data?.count || 0

  getCandidatesQuery.data?.results

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Typography className={styles.title} variant="h2" component="h1">
          Поиск кандидатов
        </Typography>
        <FiltersForm
          textTitle='Подборка'
          className={styles.navigation}
          vacancies={VACANCIES_LIST}
          filters={filters}
          onChange={handleVacancyChange}
          onInput={handleSearchInput}
        />
        <Results componentName='Candidates' candidates={candidatesList} count={count} allocation='Фильтры' addText='Добавить всех в избранные' />
      </main>
      {/* <Board candidates={FAVORITE_LIST} /> */}
    </div>
  );
};

export default Candidates;
