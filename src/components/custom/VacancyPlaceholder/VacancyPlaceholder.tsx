import { FC } from 'react';

import IVacancy, { Grade } from 'types/IVacancy';

import styles from './VacancyPlaceholder.module.css';

export interface VacancyPlaceholderProps {
  vacancy: IVacancy;
}

const VacancyPlaceholder: FC<VacancyPlaceholderProps> = ({ vacancy }) => {
  return (
    <div className={styles.vacancy}>
      Вакансия
      <span className={styles.accent}>{vacancy.profession?.name}</span>
      <span className={styles.accent}>{Grade[vacancy?.grade as any]}</span>
    </div>
  );
};

export default VacancyPlaceholder;
