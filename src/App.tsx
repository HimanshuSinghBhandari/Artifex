import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './pages/front';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
