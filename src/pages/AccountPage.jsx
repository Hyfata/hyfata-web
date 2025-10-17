import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import HeadManager from '../components/HeadManager';

const AccountPage = () => {
  return (
    <>
      <HeadManager
        title="내 계정 - Hyfata"
        description="내 계정 정보를 확인하고 설정을 관리합니다."
      />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Paper sx={{ p: 4, textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>계정 관리</Typography>
          <Typography paragraph color="text.secondary">
            계정 정보를 확인하고 관리합니다. (페이지 준비중)
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default AccountPage;
