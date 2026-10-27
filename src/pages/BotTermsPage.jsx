import React from 'react';
import { Typography, Box, Paper, Divider, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeadManager from '../components/HeadManager';

const SectionTitle = ({ children }) => (
  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
    {children}
  </Typography>
);

const Body = ({ children, ...props }) => (
  <Typography variant="body1" color="text.secondary" paragraph {...props}>
    {children}
  </Typography>
);

const BotTermsPage = () => {
  return (
    <>
      <HeadManager
        title="AI-chan · 쿠로네 이용약관 - Hyfata"
        description="Hyfata의 디스코드 AI 챗봇 AI-chan(아이짱)과 쿠로네의 이용약관입니다."
        url="/discord-bot/terms"
      />
      <Paper sx={{
        p: { xs: 2, sm: 4 },
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          AI-chan · 쿠로네 이용약관
        </Typography>
        <Body>
          시행일: 2026년 10월 27일
        </Body>
        <Body>
          본 약관은 Hyfata(이하 "운영자")가 제공하는 디스코드 AI 챗봇 <strong>AI-chan(아이짱)</strong>과 <strong>쿠로네</strong>(이하 총칭하여 "봇")의 이용에 관한 사항을 규정합니다. 본 약관은 위 두 봇에만 적용되며, Hyfata의 다른 서비스에는 적용되지 않습니다.
        </Body>
        <Body>
          봇을 서버에 초대하거나 봇에게 메시지를 보내는 등 봇을 이용하는 경우, 이용자는 본 약관과{' '}
          <Link component={RouterLink} to="/discord-bot/privacy" color="primary">
            개인정보 처리방침
          </Link>
          에 동의한 것으로 간주됩니다.
        </Body>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <SectionTitle>제1조 (목적)</SectionTitle>
        <Body>
          본 약관은 봇이 제공하는 AI 대화 서비스의 이용 조건 및 절차, 운영자와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
        </Body>

        <SectionTitle>제2조 (서비스의 내용)</SectionTitle>
        <Body>
          봇은 디스코드 내에서 이용자의 메시지에 대해 인공지능(AI)이 생성한 답변을 제공합니다. AI의 답변은 자동으로 생성되며, 답변의 정확성·완전성·적합성을 보장하지 않습니다.
        </Body>

        <SectionTitle>제3조 (이용자의 의무 및 금지 행위)</SectionTitle>
        <Body>이용자는 다음 각 호의 행위를 해서는 안 됩니다.</Body>
        <Box component="ul" sx={{ color: 'text.secondary', pl: 3, mt: 0 }}>
          <li>대한민국 법령 또는 디스코드 이용약관·커뮤니티 가이드라인에 위반되는 내용을 봇에게 입력하거나 봇을 통해 생성·유포하는 행위</li>
          <li>타인의 개인정보, 명예, 저작권 등 권리를 침해하는 행위</li>
          <li>봇의 기능을 역설계하거나, 취약점을 악용하거나, 비정상적인 방법으로 과도한 요청을 보내 서비스 운영을 방해하는 행위</li>
          <li>봇이 생성한 답변을 불법적이거나 악의적인 목적으로 이용하는 행위</li>
        </Box>
        <Body>
          운영자는 위 금지 행위가 확인되는 경우 사전 통지 없이 해당 이용자의 봇 이용을 제한할 수 있습니다.
        </Body>

        <SectionTitle>제4조 (AI 답변의 한계)</SectionTitle>
        <Body>
          봇의 답변은 AI에 의해 생성되므로 사실과 다르거나 부적절한 내용이 포함될 수 있습니다. 봇의 답변은 법률·의료·금융 등 전문적인 자문이 아니며, 이용자가 봇의 답변에 의존하여 내린 결정으로 발생한 결과에 대해 운영자는 책임을 지지 않습니다.
        </Body>

        <SectionTitle>제5조 (지식재산권)</SectionTitle>
        <Body>
          봇 및 봇이 제공하는 서비스에 대한 지식재산권은 운영자에게 귀속됩니다. 이용자가 봇에게 입력한 메시지에 대한 권리는 이용자에게 있으며, 이용자는 해당 메시지를 서비스 제공 목적으로 처리하는 데 필요한 범위의 이용 권한을 운영자에게 부여합니다.
        </Body>

        <SectionTitle>제6조 (서비스의 변경 및 중단)</SectionTitle>
        <Body>
          운영자는 운영상·기술상 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 봇은 비상업적으로 운영되는 서비스이므로, 서비스의 지속적인 제공을 보장하지 않습니다.
        </Body>

        <SectionTitle>제7조 (책임의 제한)</SectionTitle>
        <Body>
          운영자는 천재지변, 디스코드 플랫폼의 장애 등 운영자의 통제 범위를 벗어난 사유로 발생한 서비스 중단 및 이용자의 손해에 대해 책임을 지지 않습니다. 운영자의 고의 또는 중대한 과실이 없는 한, 무료로 제공되는 본 서비스 이용과 관련하여 발생한 손해에 대해 책임을 지지 않습니다.
        </Body>

        <SectionTitle>제8조 (약관의 변경)</SectionTitle>
        <Body>
          운영자는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 이 페이지에 게시한 시점부터 효력이 발생합니다. 변경 후에도 봇을 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주됩니다.
        </Body>

        <SectionTitle>제9조 (문의)</SectionTitle>
        <Body>
          본 약관에 관한 문의는 아래 이메일로 연락해 주세요.
        </Body>
        <Stack spacing={0.5}>
          <Body sx={{ mb: 0 }}>
            이메일:{' '}
            <Link href="mailto:najoan@hyfata.kr" color="primary">
              najoan@hyfata.kr
            </Link>
          </Body>
          <Body sx={{ mb: 0 }}>
            회신 메일이 스팸함으로 분류될 수 있으니, 답장이 오지 않으면 스팸함도 함께 확인해 주세요.
          </Body>
        </Stack>
      </Paper>
    </>
  );
};

export default BotTermsPage;
