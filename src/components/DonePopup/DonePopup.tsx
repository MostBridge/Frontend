import { FC } from 'react';
import styles from './DonePopup.module.css';
import { Typography } from '@mui/material';
import Button from 'components/mui/Button/Button';
import { Link } from 'react-router-dom';

type FiltersProps = {
  onClose: () => void;
  isPopupDoneOpen: boolean;
};

const DonePopup: FC<FiltersProps> = ({ onClose, isPopupDoneOpen }) => {
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={`${styles.popup} ${isPopupDoneOpen ? styles.popup_opened : ''}`}>
      <div className={styles.done} onClick={stopPropagation}>
        <Typography variant="h2" component="h2">
          Вакансия создана
        </Typography>
        <Typography variant="body1" component="p">
          Теперь можно вернуться к списку вакансий или сразу перейти на страницу кандидатов и начать поиск.
        </Typography>
        <div>
          <Link to="/">
            <Button variant="contained" onClick={onClose} className={styles.block} size="small">
              Вернуться к списку вакансий
            </Button>
          </Link>
          <Link to="/candidates">
            <Button variant="outlined" onClick={onClose} size="small">
              К подборке кандидатов
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonePopup;
