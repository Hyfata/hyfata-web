import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeadManager from '../components/HeadManager';

const NotFoundPage = () => {
  return (
    <>
      <HeadManager
        title="404 - 페이지를 찾을 수 없음"
        description="요청하신 페이지를 찾을 수 없습니다."
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        textAlign="center"
      >
        <Paper sx={{ p: 4, background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold' }}>404</Typography>
          <Typography variant="h5" component="h2" paragraph color="text.secondary">
            페이지를 찾을 수 없습니다.
          </Typography>
          <Typography color="text.secondary">
            요청하신 주소가 잘못되었거나, 페이지가 삭제되었을 수 있습니다.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/" 
            variant="contained" 
            sx={{ mt: 4 }}
          >
            홈으로 돌아가기
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default NotFoundPage;
