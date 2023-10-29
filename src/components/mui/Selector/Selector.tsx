import Select from '@mui/material/Select';
import { SelectProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Selector = styled(Select)<SelectProps>(({ theme }) => ({
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

export default Selector