import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import HeadManager from '../components/HeadManager';

const LoginPage = () => {
  return (
    <>
      <HeadManager
        title="로그인 - Hyfata"
        description="Hyfata 서비스에 로그인하여 모든 기능을 이용하세요."
      />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Paper sx={{ p: 4, textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>로그인</Typography>
          <Typography paragraph color="text.secondary">
            서비스를 이용하려면 로그인이 필요합니다.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>로그인 (기능 준비중)</Button>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
