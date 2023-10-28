import { FC } from 'react';

import IVacancy from 'src/types/IVacancy';
import { capitalizeFirstLetter } from 'utils/utils';

import styles from './VacancyPlaceholder.module.css';

export interface VacancyPlaceholderProps {
  vacancy: IVacancy;
}

const VacancyPlaceholder: FC<VacancyPlaceholderProps> = ({ vacancy }) => {
  return (
    <div className={styles.vacancy}>
      Вакансия
      <span className={styles.accent}>{vacancy.profession?.name}</span>
      <span className={styles.accent}>{capitalizeFirstLetter(vacancy?.grade)}</span>
    </div>
  );
};

export default VacancyPlaceholder;
