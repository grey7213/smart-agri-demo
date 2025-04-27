import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

function Header() {
  return (
    <Box component="header" sx={{ textAlign: 'center', my: 4, pb: 2 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        智农参谋 Demo
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        全链条智慧农业服务平台演示
      </Typography>
      <Divider />
    </Box>
  );
}

export default Header; 