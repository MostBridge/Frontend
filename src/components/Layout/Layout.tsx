import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';

import styles from './Layout.module.css';

const Layout: FC<PropsWithChildren> = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
