import { ChangeEvent, FC, useState } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';

import IFilters from 'types/IFilters';

import FiltersForm from '../../components/custom/FiltersForm/FiltersForm';
import styles from './Candidates.module.css';
import Results from '../../components/custom/Results/Results';
import Board from './Board/Board';
import { useGetCandidatesQuery, useGetVacancyQuery } from '../../redux/slices/API';

const Candidates: FC = () => {
  const getCandidatesQuery = useGetCandidatesQuery();
  const getVacanciesQuery = useGetVacancyQuery();
  const candidates = getCandidatesQuery.data?.results || [];
  const vacancies = getVacanciesQuery.data?.results;
  // const favorite = candidates?.filter((candidate) => candidate.is_favorited) || [];
  const [filters, setFilters] = useState<IFilters>({ vacancyId: 0, search: '' });

  const handleVacancyChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    setFilters({ ...filters, vacancyId: value });
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilters({ ...filters, search: value });
  };

  getCandidatesQuery.data?.results;

  const { search } = filters;

  const searchedCandidates = search
    ? candidates.filter((candidate) => candidate?.first_name?.toLowerCase().includes(search.toLowerCase()))
    : candidates;

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Typography className={styles.title} variant="h2" component="h1">
          Поиск кандидатов
        </Typography>
        <FiltersForm
          textTitle="Подборка"
          className={styles.navigation}
          vacancies={vacancies}
          filters={filters}
          onChange={handleVacancyChange}
          onInput={handleSearchInput}
        />
        <Results
          componentName="Candidates"
          candidates={candidates}
          count={candidates.length}
          allocation="Фильтры"
          addText="Добавить всех в избранные"
        />
      </main>
      <Board candidates={searchedCandidates} />
    </div>
  );
};

export default Candidates;
