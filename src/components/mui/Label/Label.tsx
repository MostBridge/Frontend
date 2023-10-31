import { FC, PropsWithChildren } from 'react';

import { Stack, Typography } from '@mui/material';

export interface LabelProps {
  label: string;
  className?: string;
  fullWidth?: boolean;
}

const Label: FC<PropsWithChildren<LabelProps>> = ({ label, className, fullWidth = true, children }) => {
  return (
    <Stack
      className={className}
      spacing="4px"
      justifyContent="flex-start"
      alignItems="flex-start"
      width={fullWidth ? '100%' : 'auto'}
    >
      <Typography variant="caption" component="label" fontWeight={500}>
        {label}
      </Typography>
      {children}
    </Stack>
  );
};

export default Label;
