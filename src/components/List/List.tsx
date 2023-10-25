import { Children, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './List.module.css';

export interface ListProps {
  className?: {
    list: string;
    item: string;
  };
}

const List: FC<PropsWithChildren<ListProps>> = ({ className, children }) => {
  const items = Children.map(children, (child) => (
    <li className={classNames(styles.item, className?.item)}>{child}</li>
  ));

  return <ul className={classNames(styles.list, className?.list)}>{items}</ul>;
};

export default List;
