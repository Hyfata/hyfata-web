# Hyfata Web

Hyfata 프로젝트의 공식 웹사이트입니다. Hyfata의 철학을 소개하고, Hyfata Mail과 같은 웹 서비스를 제공합니다.

## ✨ 주요 기능

- **반응형 디자인**: 데스크톱과 모바일 환경에 최적화된 UI/UX
- **페이지 라우팅**: `react-router-dom`을 사용한 다중 페이지 아키텍처
  - **Home**: 서비스 개요 및 메일 서비스 바로가기
  - **Info**: Hyfata 프로젝트의 역사와 개발 철학 소개
  - **Services**: 현재 제공되거나 준비 중인 서비스 목록
  - **Mail**: Hyfata Mail의 핵심 기능(다중 계정, AI 글쓰기/요약) 소개
- **애니메이션**: `framer-motion`을 활용한 부드러운 페이지 전환 및 인터랙션
- **UI 컴포넌트**: `Material-UI (MUI)`를 사용한 일관된 디자인 시스템
- **스크롤 복원**: 페이지 이동 시 스크롤 위치를 최상단으로 자동 보정

## 🛠️ 기술 스택

- **Framework**: [React](https://react.dev/)
- **UI Library**: [Material-UI (MUI)](https://mui.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: [ESLint](https://eslint.org/)

## 🚀 시작하기

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 사전 요구 사항

- [Node.js](https://nodejs.org/) (v18.x 이상 권장)
- [npm](https://www.npmjs.com/) 또는 [yarn](https://yarnpkg.com/)

### 설치 및 실행

1.  **저장소 복제** (선택 사항):
    ```bash
    git clone https://github.com/your-username/hyfata-web.git
    cd hyfata-web
    ```

2.  **의존성 설치**:
    ```bash
    npm install
    ```

3.  **개발 서버 실행**:
    ```bash
    npm run dev
    ```
    이제 브라우저에서 `http://localhost:5173` (또는 Vite가 지정한 다른 포트)으로 접속하여 웹사이트를 확인할 수 있습니다.

## 📜 사용 가능한 스크립트

- `npm run dev`: 개발 모드로 Vite 서버를 실행합니다.
- `npm run build`: 프로덕션용으로 앱을 빌드합니다. 결과물은 `dist` 디렉토리에 생성됩니다.
- `npm run lint`: ESLint를 사용하여 코드 스타일 문제를 검사합니다.
- `npm run preview`: 프로덕션 빌드 결과물을 로컬에서 미리 봅니다.