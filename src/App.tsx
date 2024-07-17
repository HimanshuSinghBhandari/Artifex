import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './pages/front';
import Pricing from './pages/pricing';
import Navbar from './components/Navbar/navbar';
import FooterPage from './pages/footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Front />} />
        <Route path="/pricing" element={<Pricing/>} />
        {/* Add other routes here as needed */}
      </Routes>
      <FooterPage/>
    </Router>
  );
}

export default App;
