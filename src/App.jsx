import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage.jsx';
import InfoPage from './pages/InfoPage';
import AnimatedPage from './components/AnimatedPage';
import MailPage from './pages/MailPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/mail" element={<AnimatedPage><MailPage /></AnimatedPage>} />
          <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/account" element={<AnimatedPage><AccountPage /></AnimatedPage>} />
          <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;