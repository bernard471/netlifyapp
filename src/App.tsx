import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Mission from './components/about/Mission';
import ReportForm from './components/whistleblower/ReportForm';
import StatisticsGrid from './components/analytics/StatisticsGrid';
import ResourceGrid from './components/resources/ResourceGrid';
import Footer from './components/Footer/Footer';
import AssetTrackingPage from './AssetTracking/page';
import FraudDashboard from './fraud/page';
import LoginModal from './components/auth/LoginModal';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        <Routes>
          <Route path="/" element={
            <main className="flex-grow">
              <Hero />
              <Features />
              <Mission />
              <StatisticsGrid />
              <ReportForm />
              <ResourceGrid />
            </main>
          } />
          <Route path="/AssetTracking" element={<AssetTrackingPage />} />
          <Route path="/fraud" element={<FraudDashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
