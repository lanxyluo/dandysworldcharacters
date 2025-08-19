import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComparePage from './pages/compare';

function App() {
  return (
    <div className="min-h-screen text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </div>
  );
}

export default App;
