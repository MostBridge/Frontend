import BackButton from 'components/custom/BackButton/BackButton';
// import React from 'react'
import styles from './CreateVacancy.module.css';
import { MenuItem, Typography } from '@mui/material';
import Button from 'components/mui/Button/Button';
import Input from './Input/Input';
import SelectorWithLabel from 'components/mui/Selector/SelectorWithLabel/SelectorWithLabel';
import Filters from './Filters/Filters';
import TextAreaBlock from './TextAreaBlock/TextAreaBlock';
import SkillBlock from './SkillBlock/SkillBlock';

const CreateVacancy = () => {
  // const cityes = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатаринбург", "Казань", "Нижний Новгород", "Красноярск", "Челябинск", "Самара", "Уфа"]
  const currencies = ['₽ Рубль', '$ Доллар', '€ Евро'];
  const filters1 = ['Полная занятость', 'Частичная занятость', 'Фриланс'];
  const filters2 = ['Офис', 'Гибрид', 'Удалённо', 'Релокейт'];
  const filters3 = ['Intern', 'Junior', 'Middle', 'Senior'];
  const filters4 = ['Без опыта', 'До 1 года', 'От 1 года', 'От 2 лет', 'От 3 лет'];
  const education = ['Среднее', 'Высшее'];
  const skills = [
    'UX дизайн',
    'UI дизайн',
    'Прототипирование',
    'Android/IOS гайдлайны',
    'Дизайн мобильных рилодений',
    'Дизайн веб-приложений',
    'Английский B1',
  ];

  return (
    <main className={styles.main}>
      <section className={styles.top_section}>
        <BackButton to="back" />
        <div className={styles.header}>
          <Typography className={styles.text} variant="h2" component="h1">
            Создание вакансии
          </Typography>
          <ul className={styles.list_of_buttons}>
            <li>
              <Button variant="outlined" size="small" className={styles.button}>
                Создать скрытую вакансию
              </Button>
            </li>
            <li>
              <Button variant="contained" size="small" className={styles.button}>
                Опубликовать вакансию
              </Button>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.bottom_section}>
        <article className={styles.article}>
          <Typography className={styles.text} variant="h3" component="h2">
            Основная информация
          </Typography>
          <ul className={styles.list_of_inputs}>
            <Input label="Название должности/cпециальность" />
            <Input label="Компания" />
          </ul>
          <ul className={styles.list_of_inputs}>
            <Input label="Страна" />
            <Input label="Город" />
          </ul>
          <ul className={styles.list_of_inputs}>
            <Input label="Зарплата" placeholder="От" />
            <Input placeholder="До" />
            <SelectorWithLabel label="Валюта" baseValue="₽ Рубль" maxWidth="150px">
              {currencies.map((el, id) => (
                <MenuItem key={id} value={el}>
                  {el}
                </MenuItem>
              ))}
            </SelectorWithLabel>
          </ul>
          <SelectorWithLabel label="Образование" maxWidth="296px">
            {education.map((el, id) => (
              <MenuItem key={id} value={el}>
                {el}
              </MenuItem>
            ))}
          </SelectorWithLabel>
          <Filters filters={filters1} title="Тип занятости"></Filters>
          <Filters filters={filters2} title="Условия"></Filters>
          <Filters filters={filters3} title="Квалификация"></Filters>
          <Filters filters={filters4} title="Опыт в специальности"></Filters>
        </article>
        <article className={styles.article}>
          <Typography className={styles.text} variant="h3" component="h2">
            Детали
          </Typography>
          <TextAreaBlock label="Описание вакансии" />
          <TextAreaBlock label="Ожидания от кандидата" />
          <SkillBlock array={skills} />
        </article>
      </section>
    </main>
  );
};

export default CreateVacancy;
