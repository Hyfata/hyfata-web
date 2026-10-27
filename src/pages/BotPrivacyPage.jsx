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

const BotPrivacyPage = () => {
  return (
    <>
      <HeadManager
        title="AI-chan · 쿠로네 개인정보 처리방침 - Hyfata"
        description="Hyfata의 디스코드 AI 챗봇 AI-chan(아이짱)과 쿠로네의 개인정보 처리방침입니다."
        url="/discord-bot/privacy"
      />
      <Paper sx={{
        p: { xs: 2, sm: 4 },
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          AI-chan · 쿠로네 개인정보 처리방침
        </Typography>
        <Body>
          시행일: 2026년 10월 27일
        </Body>
        <Body>
          본 개인정보 처리방침은 Hyfata(이하 "운영자")가 제공하는 디스코드 AI 챗봇 <strong>AI-chan(아이짱)</strong>과 <strong>쿠로네</strong>(이하 총칭하여 "봇")에서 처리하는 개인정보에 관한 사항을 규정합니다. 본 방침은 위 두 봇에만 적용되며, Hyfata의 다른 서비스에는 적용되지 않습니다. 봇 이용과 관련된 일반적인 사항은{' '}
          <Link component={RouterLink} to="/discord-bot/terms" color="primary">
            이용약관
          </Link>
          을 참고해 주세요.
        </Body>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <SectionTitle>1. 수집하는 개인정보 항목</SectionTitle>
        <Body>봇은 서비스 제공을 위해 다음 정보를 수집·저장합니다.</Body>
        <Box component="ul" sx={{ color: 'text.secondary', pl: 3, mt: 0 }}>
          <li><strong>디스코드 사용자 이름</strong>: 대화 상대를 식별하고 답변에서 이용자를 호칭하기 위해 수집합니다.</li>
          <li><strong>봇과의 메시지 기록</strong>: 이용자가 봇에게 보낸 메시지와 봇의 답변 내용을 수집합니다.</li>
        </Box>
        <Body>
          이용자가 메시지에 포함하여 전송한 정보(예: 이름, 위치 등 개인정보)는 메시지 기록의 일부로 함께 저장될 수 있으므로, 봇과의 대화에 타인의 개인정보나 민감한 정보를 입력하지 않도록 주의해 주세요.
        </Body>

        <SectionTitle>2. 개인정보의 이용 목적</SectionTitle>
        <Body>수집한 정보는 다음 목적으로만 이용됩니다.</Body>
        <Box component="ul" sx={{ color: 'text.secondary', pl: 3, mt: 0 }}>
          <li>이용자의 메시지에 대한 AI 답변 생성</li>
          <li>대화 맥락 유지를 통한 자연스러운 연속 대화 제공</li>
          <li>오류 분석, 악용 방지 등 서비스의 안정적인 운영</li>
        </Box>
        <Body>
          수집한 정보를 광고 목적으로 이용하거나 제3자에게 판매하지 않습니다.
        </Body>

        <SectionTitle>3. 개인정보의 보관 및 삭제</SectionTitle>
        <Body>
          수집한 정보는 봇이 서비스를 제공하는 기간 동안 보관됩니다. 이용자가 자신의 데이터 삭제를 요청하는 경우 운영자는 확인 절차를 거쳐 해당 정보를 지체 없이 삭제합니다.
        </Body>

        <SectionTitle>4. 개인정보의 제3자 처리</SectionTitle>
        <Body>
          봇은 디스코드 플랫폼 위에서 동작하므로, 이용자가 봇에게 보낸 메시지는 디스코드의 시스템을 경유하며 디스코드의 개인정보 처리방침이 함께 적용됩니다. 또한 AI 답변 생성 과정에서 메시지 내용이 AI 모델 처리를 위해 외부 AI 서비스로 전송될 수 있습니다. 운영자는 이 외에 수집한 정보를 별도의 제3자에게 제공하지 않습니다.
        </Body>

        <SectionTitle>5. 이용자의 권리</SectionTitle>
        <Body>
          이용자는 언제든지 자신의 디스코드 사용자 이름과 메시지 기록에 대해 열람·삭제를 요청할 수 있습니다. 삭제 요청은 아래 문의 이메일로 보내 주시면 됩니다. 요청 시 본인 확인을 위해 해당 디스코드 계정 정보를 함께 알려 주셔야 처리가 가능합니다.
        </Body>

        <SectionTitle>6. 아동의 개인정보</SectionTitle>
        <Body>
          봇은 디스코드의 연령 정책을 따르며, 디스코드 이용이 허용되지 않는 연령의 아동을 대상으로 의도적으로 개인정보를 수집하지 않습니다. 아동의 정보가 수집된 사실을 알게 되는 경우 해당 정보를 삭제합니다.
        </Body>

        <SectionTitle>7. 개인정보의 안전성 확보 조치</SectionTitle>
        <Body>
          운영자는 수집한 정보를 보호하기 위해 접근 권한을 최소한의 범위로 제한하는 등 합리적인 기술적·관리적 조치를 취하고 있습니다.
        </Body>

        <SectionTitle>8. 개인정보 처리방침의 변경</SectionTitle>
        <Body>
          본 방침이 변경되는 경우 이 페이지에 변경 내용과 시행일을 게시합니다.
        </Body>

        <SectionTitle>9. 문의</SectionTitle>
        <Body>
          개인정보의 열람·삭제 요청 및 본 방침에 관한 문의는 아래 이메일로 연락해 주세요.
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

export default BotPrivacyPage;
