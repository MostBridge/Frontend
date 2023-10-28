import { FC } from 'react';

import Labeled from 'components/Labeled/Labeled';
import Select from 'components/Select/Select';
import Input from 'components/Input/Input';
import MenuItem from 'components/MenuItem/MenuItem';
import search from 'assets/images/search.svg';

import styles from './Navigation.module.css';
import IOption from 'types/IVacancy';

export interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  const vacancies: IOption[] = [
    {
      value: 1,
      text: 'По всей базе кандидатов',
    },
    {
      value: 1,
      text: 'Вакансия ',
    },
  ];

  return (
    <section className={className}>
      <form className={styles.form}>
        <Labeled label="Подборка">
          <Select className={styles.select} placeholder="По всей базе кандидатов" defaultValue="">
            <MenuItem value="all">По всей базе кандидатов</MenuItem>
            <MenuItem value={2}>Значение 2</MenuItem>
          </Select>
        </Labeled>
        <Input className={styles.input} size="small" icon={search} placeholder="Поиск" />
      </form>
    </section>
  );
};

export default Navigation;
