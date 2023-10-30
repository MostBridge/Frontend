import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  elevation: 0,
  textTransform: 'none',
  variants: [
    {
      props: { size: 'medium' },
      style: {
        height: 50,
        fontSize: 16,
        lineHeight: '20px',
        fontWeight: 500,
        padding: 15,
      },
    },
    {
      props: { size: 'small' },
      style: {
        height: 40,
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        padding: '10px 20px',
      },
    },
    {
      props: { variant: 'contained' },
      style: {
        '&:disabled': {
          backgroundColor: '#B5B5B7',
          color: '#FFF',
        },
      },
    },
    {
      props: { variant: 'outlined' },
      style: {
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.dark,
        fontWeight: 500,

        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },

        '&:disabled': {
          borderColor: '#B5B5B7',
          color: '#B5B5B7',
        },
      },
    },
    {
      props: { variant: 'text' },
      style: {
        padding: 0,
        height: 'auto',
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.dark,
        },
      },
    },
  ],
}));

export default Button;
