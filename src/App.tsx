import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Front from './pages/front';
import Pricing from './pages/pricing';
import Navbar from './components/Navbar/navbar';
import FooterPage from './pages/footer';
import Blog from './pages/blog';
import Contact from './pages/contact';
import NotFound from './pages/404page';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Front />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
        {/* Add other routes here as needed */}
      </Routes>
      <FooterPage/>
    </Router>
  );
}

export default App;