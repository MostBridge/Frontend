import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
  variants: [
    {
      props: { variant: 'outlined' },
      styles: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,

        '&::placeholder': {
          color: theme.palette.text.secondary,
        },
      },
    },
  ],
}));

export default Input;
