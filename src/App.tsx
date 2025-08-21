import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ComparePage from './pages/compare';
import CalculatorPage from './pages/calculator';
import CommunityPage from './pages/community';
import TrinketOptimizer from './pages/trinket-optimizer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/trinket-optimizer" element={<TrinketOptimizer />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
