import { useTheme } from '@mui/material';
import styles from './Vacancies.module.css'
import Button from '@components/Button/Button';


const Vacancies = () => {
  const theme = useTheme();

  const h1Style = {
    ...theme.typography.h3,
    fontWeight: theme.typography.fontWeightMedium
  };
  console.log(theme);
  return (
    <main>
      <div className={styles.vacancies}>
      <h1 style={h1Style} className={styles.vacancies__title}>Мои вакансии</h1>
      <Button size="small" variant="contained">
          Войти
        </Button>
      </div>
    </main>
  )
}

export default Vacancies