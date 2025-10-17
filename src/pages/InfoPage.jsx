import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Stack,
  IconButton,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DiscordIcon from '../components/icons/DiscordIcon';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import HeadManager from '../components/HeadManager';

const InfoPage = () => {
  const Highlight = ({ children }) => (
    <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
      {children}
    </Typography>
  );

  return (
    <>
      <HeadManager
        title="정보 - Hyfata"
        description="Hyfata의 시작과 역사, 그리고 '미시적 혁신'을 통한 저희의 개발 철학을 소개합니다."
        url="/info"
      />
      <Box>
        <AnimatedPage>
          <Paper sx={{
            p: { xs: 2, sm: 4 },
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
          }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Hyfata에 대해</Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }} paragraph color={"text.secondary"}>Hyfata, 헤리티지를 품고 미래를 향하는 이름</Typography>
            
            <Typography variant="body1" paragraph color="text.secondary">
              모든 위대한 여정에는 시작점이 있듯, Hyfata라는 이름에도 저희의 첫 도전과 성장의 역사가 담겨 있습니다.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              그 시작은 창립자 나죠안(Najoan)이 운영했던 마인크래프트 미니게임 서버 'Hift'로 거슬러 올라갑니다. 'Hift'는 드높은 공중 섬에서 펼쳐지는 치열한 경쟁의 역동성에서 영감을 얻었습니다.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              높은 곳을 의미하는 'High'와 열정적인 전투를 상징하는 'Fight'를 결합하여 탄생한 이 이름은, 당시 저희가 추구했던 <Highlight>도전과 성취</Highlight>의 가치를 대변했습니다.
            </Typography>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} my={3} p={2} sx={{ background: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}>
              <Typography>⛰️ High</Typography>
              <Typography>+</Typography>
              <Typography>⚔️ Fight</Typography>
              <ArrowForwardIcon />
              <Typography>✨ Hift</Typography>
              <ArrowForwardIcon />
              <Typography sx={{ fontWeight: 'bold' }}>Hyfata</Typography>
            </Stack>

            <Typography variant="body1" paragraph color="text.secondary">
              시간이 흘러 저희는 서버 운영을 넘어, 더 넓은 세계를 향한 새로운 도전을 꿈꾸게 되었습니다. 바로 혁신적인 소프트웨어 서비스를 통해 새로운 가치를 창출하는 것이었습니다.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              저희는 과거의 성공에 안주하는 대신, 그 안에 담긴 'Hift'의 도전 정신을 계승하고 발전시키는 길을 택했습니다. 그 결과, <Highlight>과거의 열정과 미래의 가능성</Highlight>을 모두 품은 이름, 'Hyfata'가 탄생하게 되었습니다.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              이처럼 Hyfata는 단순히 문자를 조합한 이름이 아닌, 성공적인 과거를 발판 삼아 끊임없이 진화하려는 저희의 의지와 철학이 담긴 상징입니다.
            </Typography>

            <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }} paragraph color={"text.secondary"}>Hyfata의 개발 철학</Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Hyfata는 위대한 변화가 가장 사소한 지점에서 시작된다고 믿습니다. 기술의 진정한 가치는 거대한 담론이 아닌, 사용자의 삶에 자연스럽게 스며들어 긍정적인 변화를 만드는 데에 있기 때문입니다.
            </Typography>

            <Box
              component="blockquote"
              sx={{
                borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
                pl: 2,
                my: 3,
                fontStyle: 'italic',
                color: 'text.secondary'
              }}
            >
              <Typography variant="h6" component="p">
                "어떻게 하면 사용자의 시간을 더 가치있게 만들 수 있을까?"
              </Typography>
            </Box>
            
            <Stack spacing={3} mt={4}>
              <Card sx={{ background: 'rgba(0,0,0,0.1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                    <SearchIcon color="primary" />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>미시적 혁신 (Micro-Innovation)</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    저희는 사용자의 일상 속 작은 불편함, 반복되는 비효율, 디지털 경험의 미세한 마찰과 같은, 너무나 사소해서 당연하게 여겨졌던 문제들에 주목합니다. 눈에 띄지 않는 작은 부분까지 개선하는 <Highlight>미시적 혁신(Micro-Innovation)</Highlight>을 통해 당신의 일상을 더욱 편리하고 가치있게 만드는 스마트한 솔루션을 제공하는 것을 목표로 합니다.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ background: 'rgba(0,0,0,0.1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                    <PersonOutlineIcon color="primary" />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>사용자 가치 중심</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Hyfata의 모든 소프트웨어는 앞서 언급된 순수한 질문에서 출발합니다. 현재 비상업적으로 운영되는 저희의 원칙은, 상업적 목적을 넘어 오직 사용자 가치에만 집중하겠다는 약속의 증명입니다.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Paper>
        </AnimatedPage>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0, exit: { duration: 0 } }}
          style={{
            position: 'fixed',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
          }}
        >
          <Stack spacing={2}>
            <IconButton 
              href="https://github.com/Hyfata"
              target="_blank" 
              sx={{ 
                background: (theme) => theme.palette.gradient,
                color: 'white',
                '&:hover': { opacity: 0.8 }
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              href="http://discord.hyfata.kr/"
              target="_blank" 
              sx={{ 
                background: (theme) => theme.palette.gradient,
                color: 'white',
                '&:hover': { opacity: 0.8 }
              }}
            >
              <DiscordIcon />
            </IconButton>
          </Stack>
        </motion.div>
      </Box>
    </>
  );
};

export default InfoPage;
