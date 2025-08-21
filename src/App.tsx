import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ComparePage from './pages/compare';
import CalculatorPage from './pages/calculator';
import GameMechanicsGuide from './pages/guides/game-mechanics';
import SkillCheckGuide from './pages/guides/skill-check-guide';
import StaminaManagementGuide from './pages/guides/stamina-management';
import StealthSystemGuide from './pages/guides/stealth-system';
import TwistedMechanicsGuide from './pages/guides/twisted-mechanics';
import TrinketCombinationsGuide from './pages/guides/trinket-combinations';
import FloorProgressionGuide from './pages/guides/floor-progression';
import TeamStrategiesGuide from './pages/guides/team-strategies';
import BeginnerTipsGuide from './pages/guides/beginner-tips';
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
          <Route path="/guides/stamina-management" element={<StaminaManagementGuide />} />
          <Route path="/guides/stealth-system" element={<StealthSystemGuide />} />
          <Route path="/guides/twisted-mechanics" element={<TwistedMechanicsGuide />} />
          <Route path="/guides/trinket-combinations" element={<TrinketCombinationsGuide />} />
          <Route path="/guides/floor-progression" element={<FloorProgressionGuide />} />
          <Route path="/guides/team-strategies" element={<TeamStrategiesGuide />} />
          <Route path="/guides/beginner-tips" element={<BeginnerTipsGuide />} />
          <Route path="/trinket-guide" element={<TrinketOptimizer />} />
          <Route path="/twisted-guide" element={<TwistedGuidePage />} />
          <Route path="/floor-predictor" element={<FloorPredictor />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
