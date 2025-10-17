import React from 'react';
import { Typography, Box, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HeadManager from '../components/HeadManager';

const HomePage = () => {
  const services = [
    {
      name: 'Hyfata Mail',
      description: '안전하고 빠른 개인 맞춤형 메일 서비스입니다. 강력한 보안과 사용자 친화적인 인터페이스를 경험해보세요.',
      icon: <MailOutlineIcon sx={{ fontSize: 40 }} color="primary" />,
      link: '/mail',
      highlight: true,
    },
    {
      name: '서비스 2 (준비중)',
      description: '곧 출시될 새로운 서비스를 기대해주세요.',
      icon: <MiscellaneousServicesIcon sx={{ fontSize: 40 }} color="disabled" />,
      link: '#',
    },
    {
      name: '서비스 3 (준비중)',
      description: '곧 출시될 새로운 서비스를 기대해주세요.',
      icon: <MiscellaneousServicesIcon sx={{ fontSize: 40 }} color="disabled" />,
      link: '#',
    },
  ];

  return (
    <>
      <HeadManager
        title="Hyfata"
        description="Hyfata 공식 웹사이트. 혁신적인 웹메일 서비스와 다양한 애플리케이션을 만나보세요."
      />
      <Container maxWidth="md" sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Hyfata
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          당신의 일상을 더 가치있게 만드는 혁신적인 서비스를 만나보세요.
        </Typography>
        <Button
          component={RouterLink}
          to="/mail"
          variant="contained"
          size="large"
          startIcon={<MailOutlineIcon />}
          sx={{ mt: 4, mb: 8 }}
        >
          메일 서비스 바로가기
        </Button>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item key={service.name} xs={12} sm={service.highlight ? 12 : 6} md={service.highlight ? 8 : 4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: service.highlight ? (theme) => `2px solid ${theme.palette.primary.main}` : 'none',
                transform: service.highlight ? 'scale(1.02)' : 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box mb={2}>{service.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    {service.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button component={RouterLink} to={service.link} endIcon={<ArrowForwardIcon />}>
                    자세히 보기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;