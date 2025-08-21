import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ComparePage from './pages/compare';
import CalculatorPage from './pages/calculator';
import GameMechanicsGuide from './pages/guides/game-mechanics';
import SkillCheckGuide from './pages/guides/skill-check-guide';
import TrinketOptimizer from './pages/trinket-optimizer';
import TwistedGuidePage from './pages/twisted-guide';
import FloorPredictor from './pages/floor-predictor';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/guides/game-mechanics" element={<GameMechanicsGuide />} />
          <Route path="/guides/skill-check-guide" element={<SkillCheckGuide />} />
          <Route path="/trinket-guide" element={<TrinketOptimizer />} />
          <Route path="/twisted-guide" element={<TwistedGuidePage />} />
          <Route path="/floor-predictor" element={<FloorPredictor />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
