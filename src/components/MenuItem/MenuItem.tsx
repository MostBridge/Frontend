import { FC } from 'react';
import { MenuItem as MuiMenuItem, MenuItemProps, styled } from '@mui/material';

import Icon from 'components/Icon/Icon';
import checkMini from 'assets/images/checkMini.svg';

const StyledMenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  height: '36px',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  padding: '6px 12px',
  ...theme.typography.body2,

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const MenuItem: FC<MenuItemProps> = ({ selected, children, ...props }) => {
  return (
    <StyledMenuItem selected={selected} {...props}>
      {children}
      {selected && <Icon src={checkMini} alt="иконка" />}
    </StyledMenuItem>
  );
};

export default MenuItem;
