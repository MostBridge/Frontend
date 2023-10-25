import { Typography, useTheme, Stack } from '@mui/material';
import styles from './Vacancies.module.css';
import UpIcon from 'assets/images/up.svg';
import Strange from 'assets/images/strange.svg';
import Button from 'components/Button/Button';

const Vacancies = () => {
  const theme = useTheme();

  const h1Style = {
    ...theme.typography.h2,
    fontWeight: theme.typography.fontWeightMedium,
  };

  console.log(theme);
  return (
    <main>
      <div className={styles.vacancies}>
        <Typography style={h1Style} className={styles.vacancies__title} variant="h2" component="h1">
          Мои вакансии
        </Typography>

        <Stack direction="row" spacing={2.5}>
          <Button variant="outlined">Все</Button>
          <Button variant="outlined" endIcon={<img src={UpIcon} alt="Up icon" />}>
            Опубликованные вакансии
          </Button>
          <Button variant="outlined" endIcon={<img src={Strange} alt="strange" />}>
            Скрытые вакансии
          </Button>
        </Stack>
      </div>
    </main>
  );
};

export default Vacancies;
