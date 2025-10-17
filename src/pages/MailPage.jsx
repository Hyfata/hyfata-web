import React from 'react';
import { Typography, Box, Button, Container, Grid, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

const features = [
  {
    icon: <PeopleAltOutlinedIcon color="primary" sx={{ fontSize: 40 }} />,
    title: '다중 메일 계정 관리',
    description: '여러 개의 메일 계정을 하나로 통합하여 관리하세요. 더 이상 여러 계정을 오가며 시간을 낭비할 필요가 없습니다.',
  },
  {
    icon: <AutoAwesomeOutlinedIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'AI 메일 작성',
    description: 'AI의 도움을 받아 몇 가지 키워드만으로 완벽한 메일을 작성할 수 있습니다. 격식있는 비즈니스 메일부터 일상적인 메일까지, AI가 대신 써드립니다.',
  },
  {
    icon: <SummarizeOutlinedIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'AI 메일 요약',
    description: '긴 메일 내용을 AI가 핵심만 간추려 요약해줍니다. 바쁜 일상 속에서도 중요한 내용을 놓치지 마세요.',
  },
];

const MailPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{
        p: { xs: 2, sm: 4, md: 6 },
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Hyfata Mail
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
          AI와 함께 더 스마트하고 효율적인 메일 관리를 시작하세요.
        </Typography>
        <Button
          component="a"
          href="http://mail.hyfata.kr"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          Hyfata Mail 바로가기
        </Button>
      </Paper>

      <Box sx={{ my: { xs: 4, md: 8 } }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Paper sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.1)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
              }}>
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MailPage;
