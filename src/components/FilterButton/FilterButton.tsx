import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const FilterButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  elevation: 0,
  textTransform: 'none',
  variants: [
    {
      props: { size: 'medium' },
      style: {
        height: 28,
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 500,
        padding: '4px 8px',
      },
    },
    {
      props: { variant: "contained" },
      style: {
        backgroundColor: theme.palette.text.disabled,
        borderColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        fontWeight: 500,

        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      },
    },
  ],
}));

export default FilterButton;
