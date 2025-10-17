import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const routes = [
  {
    path: '/',
    title: 'Hyfata',
    description: 'Hyfata 공식 웹사이트. 혁신적인 웹메일 서비스와 다양한 애플리케이션을 만나보세요.',
  },
  {
    path: '/info',
    title: '정보 - Hyfata',
    description: 'Hyfata의 시작과 역사, 그리고 \'미시적 혁신\'을 통한 저희의 개발 철학을 소개합니다.',
  },
  {
    path: '/services',
    title: '서비스 - Hyfata',
    description: 'Hyfata에서 제공하는 다양한 웹 애플리케이션과 서비스 목록입니다.',
  },
  {
    path: '/mail',
    title: 'Hyfata Mail - AI 기반 웹메일',
    description: '다중 계정 관리, AI 메일 작성 및 요약 기능을 제공하는 차세대 메일 서비스를 소개합니다.',
  },
  {
    path: '/login',
    title: '로그인 - Hyfata',
    description: 'Hyfata 서비스에 로그인하여 모든 기능을 이용하세요.',
  },
  {
    path: '/account',
    title: '내 계정 - Hyfata',
    description: '내 계정 정보를 확인하고 설정을 관리합니다.',
  },
];

const distPath = path.join(__dirname, '..', 'dist');
const templateHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('Starting post-build script...');

routes.forEach(route => {
  const newHtml = templateHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      '<meta name="description" content="" />',
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      '<meta property="og:title" content="" />',
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      '<meta property="og:description" content="" />',
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      '<meta property="og:url" content="" />',
      `<meta property="og:url" content="https://hyfata.kr${route.path}" />`
    );

  let routePath;
  if (route.path === '/') {
    // For the root, just overwrite the main index.html
    routePath = path.join(distPath, 'index.html');
    fs.writeFileSync(routePath, newHtml);
    console.log(`Updated: ${routePath}`);
  } else {
    // For other routes, create a directory and an index.html inside it
    routePath = path.join(distPath, route.path);
    if (!fs.existsSync(routePath)) {
      fs.mkdirSync(routePath, { recursive: true });
    }
    fs.writeFileSync(path.join(routePath, 'index.html'), newHtml);
    console.log(`Created: ${path.join(routePath, 'index.html')}`);
  }
});

// Create a 404.html as a fallback
const notFoundRoute = { title: '404 - 찾을 수 없음', description: '요청하신 페이지를 찾을 수 없습니다.' };
const notFoundHtml = templateHtml
  .replace(/<title>.*?<\/title>/, `<title>${notFoundRoute.title}</title>`)
  .replace(
    '<meta name="description" content="" />',
    `<meta name="description" content="${notFoundRoute.description}" />`
  );
fs.writeFileSync(path.join(distPath, '404.html'), notFoundHtml);
console.log(`Created: ${path.join(distPath, '404.html')}`);

console.log('Post-build script finished.');
