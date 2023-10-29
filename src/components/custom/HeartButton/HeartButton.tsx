import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import favourite from 'assets/images/favorite.svg';
import favouriteFilled from 'assets/images/favoriteFilled.svg';

import styles from './HeartButton.module.css';

export interface HeartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorite?: boolean;
  size?: 'medium' | 'small';
}

const HeartButton: FC<HeartButtonProps> = ({ size = 'medium', isFavorite, className, ...props }) => {
  const icon = isFavorite ? favouriteFilled : favourite;
  return (
    <button
      className={classNames(styles.button, styles[size], className)}
      style={{ backgroundImage: `url(${icon})` }}
      {...props}
    />
  );
};

export default HeartButton;
