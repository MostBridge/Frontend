import { FC } from 'react';

import IVacancy from 'types/IVacancy';
import { capitalizeFirstLetter } from 'utils/utils';

import styles from './VacancyItem.module.css';

export interface VacancyItemProps {
  vacancy: IVacancy;
}

const VacancyItem: FC<VacancyItemProps> = ({ vacancy }) => {
  return (
    <div className={styles.vacancy}>
      Вакансия
      <span className={styles.accent}>{vacancy.profession?.name}</span>
      <span className={styles.accent}>{capitalizeFirstLetter(vacancy?.grade)}</span>
    </div>
  );
};

export default VacancyItem;
