import { IconButton, Typography, MenuList, Menu, Popover } from '@mui/material';
import styles from './BlockVacancy.module.css';
import { FC, useState } from 'react';
import icon from '../../assets/images/Icons.svg';
import file from '../../assets/images/file.svg';
import write from '../../assets/images/write.svg';
import box from '../../assets/images/box.svg';
import DropDown from 'components/DropDown/DropDown';

const BlockVacancy: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className={styles.block}>
      <div className={styles.block__first}>
        <div className={styles.infoBlock}>
          <Typography variant="body1" color="text.primary">
            Графический дизайнер
          </Typography>
          <Typography className={styles.state} variant="body2" color="text.primary">
            Опубликовано
          </Typography>
        </div>
        <div className={styles.infoBlock}>
          <Typography className={styles.date} variant="body2" color="text.secondary">
            Создано 12 октября
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
              <DropDown alt='Иконка скачивания' text="Опубликовать" closeMenu={handleClose} icon={file} />
              <DropDown alt='Иконка редактирования' text="Редактировать" closeMenu={handleClose} icon={write} />
              <DropDown alt='Иконка архива' text="Архивировать" closeMenu={handleClose} icon={box} />
            </Popover>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockVacancy;
