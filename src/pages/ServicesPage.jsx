import React from 'react';
import { Typography, Grid, Card, CardContent, CardHeader } from '@mui/material';
import HeadManager from '../components/HeadManager';

const apps = [
  { name: 'App 1', description: 'This is a brief description for App 1.' },
  { name: 'App 2', description: 'This is a brief description for App 2.' },
  { name: 'App 3', description: 'This is a brief description for App 3.' },
  { name: 'App 4', description: 'This is a brief description for App 4.' },
];

const ServicesPage = () => {
  return (
    <>
      <HeadManager
        title="서비스 - Hyfata"
        description="Hyfata에서 제공하는 다양한 웹 애플리케이션과 서비스 목록입니다."
      />
      <Grid container spacing={4} justifyContent="center">
        {apps.map((app, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: (theme) => `0 10px 20px rgba(0,0,0,0.2), 0 0 15px ${theme.palette.primary.main}70`,
              }
            }}>
              <CardHeader 
                title={app.name} 
                sx={{ 
                  background: (theme) => theme.palette.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent', 
                  textAlign: 'center' 
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  {app.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ServicesPage;