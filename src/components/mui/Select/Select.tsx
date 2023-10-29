import { MenuProps, Select as MuiSelect, SelectProps as MuiSelectProps, styled } from '@mui/material';

import Icon from 'components/mui/Icon/Icon';
import arrowDown from 'assets/images/arrowDown.svg';

import Placeholder from './Placeholder/Placeholder';

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  height: '40px',
  borderColor: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  cursor: 'pointer',
  ...theme.typography.body2,

  '.MuiOutlinedInput-notchedOutline': {
    paddginLeft: '12px',
    paddingRight: '12px',
  },

  '& .MuiSelect-outlined': {
    transform: 'rotate(0deg)',
  },

  '& .MuiSelect-select': {
    padding: '8px 36px 8px 12px!important',
  },

  '& .MuiSelect-icon': {
    transform: 'rotate(0deg)',
  },
})) as unknown as typeof MuiSelect;

const StyledMenu: Partial<MenuProps> = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: { vertical: -5, horizontal: 'center' },
  PaperProps: {
    sx: {
      maxHeight: '220px',
      boxSizing: 'border-box',
      bgcolor: '#FFF',
      outline: '1px solid #DDE0E4',
      '& .MuiList-root': {
        padding: 0,
        border: 'none',
      },
    },
  },
};

export interface SelectProps<Value = unknown> extends MuiSelectProps<Value> {
  placeholder?: string;
}

export default function Select<Value = unknown>({
  placeholder,
  multiple,
  renderValue: renderValueProp,
  ...props
}: SelectProps<Value>): JSX.Element {
  const renderValue = (selected: any) => {
    if (selected === null || selected === undefined || selected === '' || selected.length === 0) {
      return <Placeholder>{placeholder}</Placeholder>;
    }
    if (renderValueProp) {
      return renderValueProp(selected);
    }
    if (multiple) {
      return selected.join(', ');
    }
    return selected;
  };

  return (
    <StyledSelect
      displayEmpty
      multiple={multiple}
      renderValue={renderValue}
      MenuProps={StyledMenu}
      IconComponent={(props) => <Icon src={arrowDown} alt="иконка" {...props} />}
      {...props}
    />
  );
}
