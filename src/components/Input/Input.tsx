import { FC } from 'react';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import Icon from 'components/Icon/Icon';

const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-input': {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },

  '& .MuiInputBase-input::placeholder': {
    opacity: 1,
    color: theme.palette.text.secondary,
  },

  variants: [
    {
      props: { size: 'medium' },
      style: {
        '& .MuiInputBase-input': {
          height: '56px',
          padding: '18.5px 14px',
          ...theme.typography.body1,
        },

        '& .MuiInputBase-input::placeholder': {
          ...theme.typography.body1,
        },

        '& .MuiInputBase-adornedStart': {
          paddingLetf: '14px',
        },
      },
    },
    {
      props: { size: 'small' },
      style: {
        '& .MuiInputBase-input': {
          height: '40px',
          padding: '10px 12px',
          ...theme.typography.body2,
        },

        '& .MuiInputBase-input::placeholder': {
          ...theme.typography.body2,
        },

        '& .MuiInputBase-adornedStart': {
          paddingLeft: '12px',
          width: 'fit-content',
          '& .MuiInputBase-input': {
            paddingLeft: 0,
          },
        },
      },
    },
  ],
}));

export type InputProps = { icon?: string } & TextFieldProps;

const Input: FC<InputProps> = ({ icon, InputProps, ...props }) => {
  return (
    <StyledInput
      InputProps={{
        style: { width: '100%' },
        startAdornment: icon ? (
          <InputAdornment position="start">
            <Icon src={icon} />
          </InputAdornment>
        ) : null,
      }}
      {...props}
    />
  );
};

export default Input;
