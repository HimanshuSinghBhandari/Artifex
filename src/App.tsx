import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './pages/front';
import FooterPage from './pages/footer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        {/* Add other routes here as needed */}
      </Routes>
      <FooterPage/>
    </Router>
  );
}

export default App;
