import { FC, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

import Labeled from 'components/Labeled/Labeled';
import Select from 'components/Select/Select';
import Input from 'components/Input/Input';
import MenuItem from 'components/MenuItem/MenuItem';
import icon from 'assets/images/search.svg';
import IVacancy from 'types/IVacancy';
import IFilters from 'types/IFilters';

import styles from './FiltersForm.module.css';
import VacancyItem from '../VacancyItem/VacancyItem';

export interface FiltersFormProps {
  filters: IFilters;
  vacancies?: IVacancy[];
  className?: string;
  onChange?: (event: SelectChangeEvent<number>) => void;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FiltersForm: FC<FiltersFormProps> = ({ filters, vacancies = [], className, onChange, onInput }) => {
  const { vacancyId, search } = filters;

  const renderValue = (value: number) => {
    const vacancy = vacancies.find((vacancy) => vacancy?.id === value);
    return vacancy ? <VacancyItem vacancy={vacancy} /> : 'По всей базе кандидатов';
  };

  return (
    <section className={className}>
      <form className={styles.form}>
        <Labeled label="Подборка">
          <Select className={styles.select} renderValue={renderValue} value={vacancyId} onChange={onChange}>
            <MenuItem value={0}>По всей базе кандидатов</MenuItem>
            {vacancies.map((vacancy) => (
              <MenuItem key={vacancy?.id} value={vacancy.id}>
                <VacancyItem vacancy={vacancy} />
              </MenuItem>
            ))}
          </Select>
        </Labeled>
        <Input value={search} className={styles.input} size="small" icon={icon} placeholder="Поиск" onInput={onInput} />
      </form>
    </section>
  );
};

export default FiltersForm;
