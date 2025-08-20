import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComparePage from './pages/compare';
import CalculatorPage from './pages/calculator';
import CommunityPage from './pages/community';

function App() {
  return (
    <div className="min-h-screen text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </div>
  );
}

export default App;
