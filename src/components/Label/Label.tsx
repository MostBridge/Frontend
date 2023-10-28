import { FC, PropsWithChildren } from 'react';

import { Typography } from '@mui/material';

const Label: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="caption" component="label" fontWeight={500}>
      {children}
    </Typography>
  );
};

export default Label;
