import BackButton from '../../components/BackButton/BackButton'
// import React from 'react'
import styles from './CreateVacancy.module.css'
import { MenuItem, Typography } from '@mui/material'
import Button from '../../components/Button/Button'
import Input from './Input/Input'
import SelectorWithLabel from 'components/Selector/SelectorWithLabel/SelectorWithLabel'
import Filters from './Filters/Filters'

const CreateVacancy = () => {

  // const cityes = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатаринбург", "Казань", "Нижний Новгород", "Красноярск", "Челябинск", "Самара", "Уфа"]
  const currencies = ['₽ Рубль', '$ Доллар', '€ Евро',]
  const filters = ['Полная занятость', 'Частичная занятость', 'Фриланс']
  const education = ['Среднее', 'Высшее']

  return (
    <main className={styles.main}>
      <section className={styles.top_section}>
        <BackButton to='back' />
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
            <SelectorWithLabel label='Валюта' baseValue="₽ Рубль" maxWidth='150px'>
              {currencies.map((el, id) => <MenuItem key={id} value={el}>{el}</MenuItem>)}
            </SelectorWithLabel>
          </ul>
          <SelectorWithLabel label='Образование' maxWidth='296px' >
            {education.map((el, id) => <MenuItem key={id} value={el}>{el}</MenuItem>)}
          </SelectorWithLabel>
          <Filters filters={filters} title='Тип занятости'></Filters>
        </article>
        <article className={styles.article}>
          <Typography className={styles.text} variant="h3" component="h2">
            Детали
          </Typography>
        </article>
      </section>
    </main>
  )
}

export default CreateVacancy
