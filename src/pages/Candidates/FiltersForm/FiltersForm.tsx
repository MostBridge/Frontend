import { FC, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

import icon from 'assets/images/search.svg';
import Label from 'components/mui/Label/Label';
import Select from 'components/mui/Select/Select';
import Input from 'components/mui/Input/Input';
import MenuItem from 'components/mui/MenuItem/MenuItem';
import IVacancy from 'types/IVacancy';
import IFilters from 'types/IFilters';
import VacancyPlaceholder from 'components/custom/VacancyPlaceholder/VacancyPlaceholder';

import styles from './FiltersForm.module.css';

export interface FiltersFormProps {
  className?: string;
  filters: IFilters;
  vacancies?: IVacancy[];
  onChange?: (event: SelectChangeEvent<number>) => void;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FiltersForm: FC<FiltersFormProps> = ({ filters, vacancies = [], className, onChange, onInput }) => {
  const { vacancyId, search } = filters;

  const renderValue = (value: number) => {
    const vacancy = vacancies.find((vacancy) => vacancy?.id === value);
    return vacancy ? <VacancyPlaceholder vacancy={vacancy} /> : 'По всей базе кандидатов';
  };

  return (
    <section className={className}>
      <form className={styles.form}>
        <Label label="Подборка">
          <Select className={styles.select} renderValue={renderValue} value={vacancyId} onChange={onChange}>
            <MenuItem value={0}>По всей базе кандидатов</MenuItem>
            {vacancies.map((vacancy) => (
              <MenuItem key={vacancy?.id} value={vacancy.id}>
                <VacancyPlaceholder vacancy={vacancy} />
              </MenuItem>
            ))}
          </Select>
        </Label>
        <Input value={search} className={styles.input} size="small" icon={icon} placeholder="Поиск" onInput={onInput} />
      </form>
    </section>
  );
};

export default FiltersForm;
