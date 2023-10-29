import { FC, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

const Placeholder: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="body2" component="p" color="text.secondary" overflow="hidden" textOverflow="ellipsis">
      {children}
    </Typography>
  );
};

export default Placeholder;
