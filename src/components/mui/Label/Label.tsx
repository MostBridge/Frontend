import { FC, PropsWithChildren } from 'react';

import { Stack, Typography } from '@mui/material';

export interface LabelProps {
  label: string;
}

const Label: FC<PropsWithChildren<LabelProps>> = ({ label, children }) => {
  return (
    <Stack spacing="4px" justifyContent="flex-start" alignItems="flex-start">
      <Typography variant="caption" component="label" fontWeight={500}>
        {label}
      </Typography>
      {children}
    </Stack>
  );
};

export default Label;
