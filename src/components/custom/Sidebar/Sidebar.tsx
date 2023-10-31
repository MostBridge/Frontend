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
import styles from './Sidebar.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from 'src/redux/store/store';
import Header from './Header/Header';
import Tab from './Tab/Tab';

const Sidebar: FC = () => {

   interface email {
    email: string;
  }
  const selectEmail = (state: RootState) => state.Profile.email;
  const email = useAppSelector(selectEmail);


  const user: IUser = { first_name: 'Надежда', last_name: 'Сидорова', avatar };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <Header user={user} email={email} />
        <List>
          <Tab icon={house} text="Мои вакансии" to="/"/>
          <Tab icon={persons} text="Поиск кандидатов" to="/candidates" />
          <Tab icon={heart} text="Избранные кандидаты" to="/favorite" />
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
