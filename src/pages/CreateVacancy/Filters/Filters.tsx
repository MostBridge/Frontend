import { Typography } from '@mui/material';
import { FC } from 'react';
import styles from './Filters.module.css';
import CustomFilterButton from '../CustomFilterButton/CustomFilterButton';

export interface Filter {
  id?: number | string;
  value?: any;
}

interface FiltersProps {
  filters?: Filter[];
  title: string;
  onClick: (id?: number | string) => void;
}

const Filters: FC<FiltersProps> = ({ filters, title, onClick }) => {
  return (
    <div className={styles.container}>
      <Typography className={styles.text} variant="caption" component="h3">
        {title}
      </Typography>
      <ul className={styles.list}>
        {filters?.map(({ id, value }) => {
          return (
            <li key={id}>
              <CustomFilterButton value={id} el={value} onClick={onClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
