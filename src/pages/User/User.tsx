import { FC, useState } from 'react';
import styles from './User.module.css';
import { Tab, Tabs, Typography } from '@mui/material';
import graph from '../../assets/images/chart-column.svg';
import map from '../../assets/images/map.svg';
import money from '../../assets/images/money.svg';
import star from '../../assets/images/star.svg';
import like from '../../assets/images/icon_like.svg';
import down from '../../assets/images/arrow_down.svg';
import Participation from 'components/custom/Participation/Participation';
import Button from 'components/mui/Button/Button';
import BackButton from 'components/custom/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import user_image from './../../assets/images/img.png'
import email_icon from './../../assets/images/envelope-open.svg'
import telegram_icon from './../../assets/images/logo-telegram.svg'

const User: FC = () => {

  const [tabsValues, setTabsValues] = useState({ first: 0, second: 0, third: 0, });

  const handleChange = (key: 'first' | 'second' | 'third', newValue: number) => {
    setTabsValues((prevValues) => ({ ...prevValues, [key]: newValue }));
  };

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const candidateInfo = {
    first_name: 'Константин',
    last_name: 'Константинов',
    contacts: {
      Телефон: '88005553535',
      Telegram: '@konstantin',
      email: 'konstantin@getMaxListeners.com',
    },
    profession: {
      name: 'Графический дизайнер',
    },
  }

  return (
    <main className={styles.main}>
      <BackButton onBack={goBack} />
      <div className={styles.flex_row}>
        <section className={styles.sidebar}>
          <img className={styles.image} src={user_image} alt="Фотография кандидата" />
          <div className={styles.name_container}>
            <Typography className={styles.name} variant="caption" component="h1">{`${candidateInfo.first_name} ${candidateInfo.last_name}`}</Typography>
            <Typography className={styles.name} variant="caption" component="h2">{candidateInfo.profession.name}</Typography>
          </div>
          <div className={styles.buttons}>
            <Button variant="contained" size="small">
              Написать
            </Button>
            <Button variant="outlined" size="small">
              Скачать резюме
            </Button>
          </div>
          <div className={styles.info_bottom}>
            <div className={styles.contacts}>
              <Typography className={styles.name} variant="body1" component="h3">Контакты</Typography>
              <div className={styles.contacts_element}>
                <div className={styles.contacts_row}>
                  <img src={email_icon} alt='Иконка email' />
                  <Typography variant="body1" component="p">{candidateInfo.contacts.email}</Typography>
                </div>
                <div className={styles.contacts_row}>
                  <img src={telegram_icon} alt='Иконка телеграм' />
                  <Typography variant="body1" component="p">{candidateInfo.contacts.Telegram}</Typography>
                </div>
              </div>
            </div>
            <div className={styles.contacts}>
              <Typography className={styles.name} variant="body1" component="h3">Дополнительные ссылки</Typography>
              <div className={styles.contacts_element}>
                <Button size="small" variant="text" disableRipple>Портфолио на Behance</Button>
                <Button size="small" variant="text" disableRipple>Блог на VC</Button>
              </div>
            </div>
            <div className={styles.contacts}>
              <Typography className={styles.name} variant="body1" component="h3">Учебный статус</Typography>
              <div className={styles.contacts_element}>
                <Typography variant="body1" component="p">Выпускник курса «Графический
                  дизайн», 2023 г.</Typography>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.info}>
          <div className={styles.paragraphBlock}>
            <Typography className={styles.paragraphFirst} variant="caption" component="p">
              Совпадение 90%
            </Typography>
            <Typography className={styles.paragraphSecond} variant="caption" component="p">
              Ищу работу
            </Typography>
          </div>
          <div className={styles.block__second}>
            <div className={styles.infoBlock}>
              <img src={graph} alt="Иконка графика" />
              <Typography color="text.secondary" variant="body2">
                Middle
              </Typography>
            </div>

            <div className={styles.infoBlock}>
              <img src={map} alt="Иконка города" />
              <Typography color="text.secondary" variant="body2">
                Москва
              </Typography>
            </div>

            <div className={styles.infoBlock}>
              <img src={money} alt="Иконка денег" />
              <Typography color="text.secondary" variant="body2">
                100 000 ₽
              </Typography>
            </div>

            <div className={styles.infoBlock}>
              <img src={star} alt="Иконка звезды" />
              <Typography color="text.secondary" variant="body2">
                Опыт до 1 года
              </Typography>
            </div>
            <img className={styles.like} src={like} alt="Иконка сердца" />
          </div>
          <Typography className={styles.title} variant="subtitle1" component="h3">
            Навыки
          </Typography>
          <div className={styles.skills}>
            <Typography variant="body1" component="p" className={styles.list}>
              • Разработка полиграфический материалов{' '}
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Векторная графика
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Дизайн иконок
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Растровая графика
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Разработка фирменного стиля
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Создание иллюстраций
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Создание скетчей
            </Typography>
          </div>
          <Tabs
            value={tabsValues.first}
            onChange={(_, value: number) => handleChange('first', value)}
            aria-label="tabs"
          >
            <Tab
              style={{
                color: tabsValues.first === 0 ? 'black' : '#797981',
                fontWeight: tabsValues.first === 0 ? 500 : 400,
              }}
              className={styles.vacancies__tab}
              label="Опыт работы"
            />
            <Tab
              style={{
                color: tabsValues.first === 1 ? 'black' : '#797981',
                fontWeight: tabsValues.first === 1 ? 500 : 400,
              }}
              className={styles.vacancies__tab}
              label="Образование"
            />
            <Tab
              style={{
                color: tabsValues.first === 2 ? 'black' : '#797981',
                fontWeight: tabsValues.first === 2 ? 500 : 400,
              }}
              className={styles.vacancies__tab}
              label="Курсы"
            />
          </Tabs>
          <Typography className={`${styles.title} ${styles.title_second}`} variant="body1" component="h3">
            ZephyrLab
          </Typography>
          <div className={styles.profession}>
            <Typography variant="body1" component="p" className={styles.list}>
              Дизайнер
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Июль 2022 — По настоящее время (1 год и 4 месяца)
            </Typography>
          </div>
          <Typography variant="body1" component="p" className={styles.list}>
            • Cоздаю интерфейсы сложных аналитических систем, дашбордов для крупного бизнеса
          </Typography>
          <div>
            <Typography variant="body1" component="p" className={styles.list}>
              • Проектирую пользовательский путь, рисую макеты, создаю прототипы
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Подготавливаю анимации в прототипах+описание, lottie-анимации для разработчиков в json
            </Typography>
            <Typography variant="body1" component="p" className={styles.list}>
              • Следую правилам дизайн-системы (объединяет несколько продуктов) и развиваю её
            </Typography>
          </div>
          <Button className={styles.icon} variant='text' endIcon={<img src={down} alt="arrow down" />}>Развернуть</Button>
          <Typography variant="subtitle1" component="p">
            Участие в проектах
          </Typography>
          <div className={styles.cardsBlock}>
            <Participation title='«Голосовой помощник для Яндекс»' name=' Дизайн-спринт, июнь 2023' achievement='Победитель' />
            <Participation title='«Web-приложение „Corporate tasker“' name=' Дизайн-спринт, июнь 2023' achievement='Участник' />
            <Participation title='«Агрегатор цен на отдых в России»' name=' Дизайн-спринт, июнь 2023' achievement='Участник' />
          </div>
        </section>
      </div >
    </main >
  );
};

export default User;
