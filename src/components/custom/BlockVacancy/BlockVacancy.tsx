import { IconButton, Typography, Popover } from '@mui/material';
import styles from './BlockVacancy.module.css';
import { FC, useState } from 'react';
import icon from 'assets/images/Icons.svg';
import file from 'assets/images/file.svg';
import write from 'assets/images/write.svg';
import box from 'assets/images/box.svg';
import graph from 'assets/images/chart-column.svg';
import map from 'assets/images/map.svg';
import money from 'assets/images/money.svg';
import star from 'assets/images/star.svg';
import arrow from 'assets/images/arrow_right.svg';
import DropDown from 'components/custom/DropDown/DropDown';
import Button from 'components/mui/Button/Button';
import IVacancy, { Experience, Grade } from 'types/IVacancy';

interface VacancyProps {
  data: IVacancy;
}

const BlockVacancy: FC<VacancyProps> = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let formattedDate;

  let date = data.created_date;

  if (typeof data.created_date === 'string') {
    date = new Date(data.created_date);
  }

  if (date instanceof Date) {
    formattedDate = date.toLocaleDateString('ru-RU', {
      day: '2-digit', // двухзначный день
      month: '2-digit', // двухзначный месяц
      year: 'numeric', // год в формате "yyyy"
    });
  }
  return (
    <section className={styles.block}>
      <div className={styles.block__first}>
        <div className={styles.infoBlock}>
          <Typography variant="body1" color="text.primary">
            {data.profession?.name}
          </Typography>
          <Typography className={styles.state} variant="body2" color="text.primary">
            Опубликовано {formattedDate}
          </Typography>
        </div>
        <div className={styles.infoBlock}>
          <Typography className={styles.date} variant="body2" color="text.secondary">
            {`Создано ${formattedDate}`}
          </Typography>
          <div className={styles.menuList}>
            <IconButton aria-controls="simple-menu" onClick={handleClick}>
              <img src={icon} alt="Настройки" />
            </IconButton>
            <Popover
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <DropDown alt="Иконка скачивания" text="Опубликовать" closeMenu={handleClose} icon={file} />
              <DropDown alt="Иконка редактирования" text="Редактировать" closeMenu={handleClose} icon={write} />
              <DropDown alt="Иконка архива" text="Архивировать" closeMenu={handleClose} icon={box} />
            </Popover>
          </div>
        </div>
      </div>
      <div className={styles.block__second}>
        <div className={styles.infoBlock}>
          <img src={graph} alt="Иконка графика" />
          <Typography color="text.secondary" variant="body2">
            {Grade[data.grade as any]}
          </Typography>
        </div>

        <div className={styles.infoBlock}>
          <img src={map} alt="Иконка города" />
          <Typography color="text.secondary" variant="body2">
            {data.town?.city}
          </Typography>
        </div>

        <div className={styles.infoBlock}>
          <img src={money} alt="Иконка денег" />
          <Typography color="text.secondary" variant="body2">{`---- ₽`}</Typography>
        </div>

        <div className={styles.infoBlock}>
          <img src={star} alt="Иконка звезды" />
          <Typography color="text.secondary" variant="body2">
            {Experience[data.experience as any]}
          </Typography>
        </div>
      </div>
      <div>
        <Button className={styles.button} size="small" variant="outlined">
          <Typography variant="body2">Подборка 40</Typography>
          <Typography className={styles.new} variant="body2">
            new 15
          </Typography>
          <img src={arrow} alt="Иконка стрелки" />
        </Button>

        <Button className={styles.button} size="small" variant="outlined">
          <Typography variant="body2">Отклики 12</Typography>
          <Typography className={styles.new} variant="body2">
            new 15
          </Typography>
          <img src={arrow} alt="Иконка стрелки" />
        </Button>

        <Button className={styles.button} size="small" variant="outlined">
          <Typography variant="body2">Избранные</Typography>
          <img src={arrow} alt="Иконка стрелки" />
        </Button>
      </div>
    </section>
  );
};

export default BlockVacancy;
