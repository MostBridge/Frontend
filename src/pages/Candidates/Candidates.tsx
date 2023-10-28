import { FC, useState } from 'react';

import { Typography } from '@mui/material';

import Navigation from './Navigation/Navigation';
import styles from './Candidates.module.css';

const Candidates: FC = () => {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Typography className={styles.title} variant="h2" component="h1" fontWeight={500}>
          Поиск кандидатов
        </Typography>
        <Navigation className={styles.navigation} />
      </main>
    </div>
  );
};

export default Candidates;
