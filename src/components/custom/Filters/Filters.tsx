import { FC, useState } from 'react';
import styles from './Filters.module.css';
import { SelectChangeEvent, TextField, Typography } from '@mui/material';
import Button from 'components/mui/Button/Button';
import deleteIcon from 'assets/images/delete.svg';
import Select from 'components/mui/Select/Select';
import Label from 'components/mui/Label/Label';
import MenuItem from 'components/mui/MenuItem/MenuItem';
import { ITSpecialties, currencies, qualification, education, experience, typeEmployment } from 'utils/constants';

type FiltersProps = {
  onClose: () => void;
  isPopupFilterOpen: boolean;
};

type SelectValues = {
  select1: string;
  select2: string;
  select3: string;
  select4: string;
  select5: string;
  select6: string;
  select7: string;
  select8: string;
  select9: string;
  select10: string;
};

const Filters: FC<FiltersProps> = ({ onClose, isPopupFilterOpen }) => {
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const [condition, setCondition] = useState<SelectValues>({
    select1: '',
    select2: '',
    select3: '',
    select4: '',
    select5: '',
    select6: '',
    select7: '',
    select8: '',
    select9: '',
    select10: '',
  });

  const handleChange = (
    event: SelectChangeEvent<string> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    selectType: keyof SelectValues,
  ) => {
    const value = event.target.value;
    setCondition((prev) => ({ ...prev, [selectType]: value } as SelectValues));
  };

  return (
    <div className={`${styles.popup} ${isPopupFilterOpen ? styles.popup_opened : ''}`}>
      <div className={styles.filters} onClick={stopPropagation}>
        <div className={styles.filters__block}>
          <Typography variant="h2" component="h2">
            Фильтры
          </Typography>
          <button className={styles.buttonDrop} aria-label="Закрытие попапа" type="button" onClick={onClose}></button>
        </div>
        <Button
          variant="text"
          size="small"
          startIcon={<img src={deleteIcon} alt="иконка очистки" />}
          className={styles.buttonSetting}
        >
          Очистить фильтры
        </Button>
        <div className={styles.conditionBlock}>
          <Label label="Специализация">
            <Select
              className={styles.condition}
              placeholder="Выберите из списка"
              value={condition.select1}
              onChange={(e) => handleChange(e, 'select1')}
            >
              {ITSpecialties.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </Label>

          <Label label="Тип занятости">
            <Select
              className={styles.employment}
              placeholder="Выберите из списка"
              value={condition.select2}
              onChange={(e) => handleChange(e, 'select2')}
            >
              {typeEmployment.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </Label>
        </div>

        <div className={styles.conditionBlock}>
          <Label label="Город">
            <TextField
              className={styles.city}
              value={condition.select3}
              onChange={(e) => handleChange(e, 'select3')}
              size="small"
            />
          </Label>
          <Label label="Условия">
            <Select
              className={styles.city}
              placeholder="Выберите из списка"
              value={condition.select4}
              onChange={(e) => handleChange(e, 'select4')}
            >
              {typeEmployment.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </Label>
          <Label label="Заработная плата">
            <div>
              <TextField
                className={styles.salary}
                value={condition.select5}
                onChange={(e) => handleChange(e, 'select5')}
                size="small"
              />
              <Select
                className={styles.currency}
                placeholder="₽"
                value={condition.select6}
                onChange={(e) => handleChange(e, 'select6')}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.text}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Label>
        </div>

        <div className={styles.conditionBlock}>
          <Label label="Опыт работы">
            <Select
              className={styles.forthInput}
              placeholder="Выберите из списка"
              value={condition.select7}
              onChange={(e) => handleChange(e, 'select7')}
            >
              {experience.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </Label>

          <Label label="Квалификация">
            <Select
              className={styles.forthInput}
              placeholder="Выберите из списка"
              value={condition.select8}
              onChange={(e) => handleChange(e, 'select8')}
            >
              {qualification.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </Label>
        </div>

        <div className={styles.conditionBlock}>
          <Label label="Образование">
            <Select
              className={styles.forthInput}
              placeholder="Выберите из списка"
              value={condition.select9}
              onChange={(e) => handleChange(e, 'select9')}
            >
              {education.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </Label>
          <Label label="Требуемые навыки">
            <TextField
              className={styles.forthInput}
              placeholder="Введите навыки"
              value={condition.select10}
              onChange={(e) => handleChange(e, 'select10')}
              size="small"
            />
          </Label>
        </div>
        <div className={styles.buttonBlock}>
          <Button className={styles.buttonHide} variant="outlined" size="small">
            Сохранить в скрытые
          </Button>
          <Button className={styles.buttonSearch} variant="contained" size="small">
            Найти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
