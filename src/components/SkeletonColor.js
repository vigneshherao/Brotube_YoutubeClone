import * as React from 'react';
import Skeleton, { skeletonClasses } from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    <Box
      sx={{

        margin: '1%',

      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.200' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
}


