import { ChangeEvent, FC, useState } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';
import { CANDIDATES_LIST, VACANCIES_LIST } from '../../utils/constants';
import IFilters from 'types/IFilters';
import Results from 'components/custom/Results/Results';
import FiltersForm from 'components/custom/FiltersForm/FiltersForm';
import styles from './Favorite.module.css';
import Action from './Action/Action';


const Favorite: FC = () => {
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
        Избранные кандидаты
        </Typography>
        <FiltersForm
          textTitle='Избранные'
          className={styles.navigation}
          vacancies={VACANCIES_LIST}
          filters={filters}
          onChange={handleVacancyChange}
          onInput={handleSearchInput}
        />
        <Results componentName='Favorites' allocation="Сортировка" addText='Выбрать всех' candidates={CANDIDATES_LIST} />
      </main>
      <Action />
    </div>
  );
};

export default Favorite;
