import { FC } from 'react';

import List from 'components/custom/List/List';
import IUser from 'types/IUser';
import avatar from 'assets/images/avatar.png';
import house from 'assets/images/house.svg';
import persons from 'assets/images/persons.svg';
import heart from 'assets/images/heart.svg';
import circleCheck from 'assets/images/circleCheck.svg';
import comment from 'assets/images/comment.svg';
import bell from 'assets/images/bell.svg';
import gear from 'assets/images/gear.svg';
import circleInfo from 'assets/images/circleInfo.svg';
import signOut from 'assets/images/signOut.svg';

import Header from './Header/Header';
import Tab from './Tab/Tab';
import styles from './Sidebar.module.css';

const Sidebar: FC = () => {
  const user: IUser = { first_name: 'Надежда', last_name: 'Сидорова', email: 'sidorova@yandex.ru', avatar };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <Header user={user} />
        <List>
          <Tab icon={house} text="Мои вакансии" to="/vacancies"/>
          <Tab icon={persons} text="Поиск кандидатов" to="/candidates" />
          <Tab icon={heart} text="Избранные кандидаты" to="/favourites" />
          <Tab icon={circleCheck} text="Отклики" />
          <Tab icon={comment} text="Мессенджер" />
        </List>
      </div>
      <List>
        <Tab icon={bell} text="Уведомления" />
        <Tab icon={gear} text="Настройки" />
        <Tab icon={circleInfo} text="Помощь" />
        <Tab icon={signOut} text="Выход" />
      </List>
    </aside>
  );
};

export default Sidebar;
