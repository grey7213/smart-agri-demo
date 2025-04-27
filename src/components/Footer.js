import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, pt: 2, pb: 4, textAlign: 'center' }}>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="text.secondary">
        © 2025 智农参谋 - 大学创业竞赛演示版本
      </Typography>
    </Box>
  );
}

export default Footer; 