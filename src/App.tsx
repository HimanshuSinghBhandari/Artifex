import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Front from './pages/front';
import Pricing from './pages/pricing';
import Navbar from './components/Navbar/navbar';
import FooterPage from './pages/footer';
import Blog from './pages/blog';
import Contact from './pages/contact';
import NotFound from './pages/404page';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Billing from './pages/billing';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {!isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Front />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate replace to="/login" />} />
        <Route path="/billing" element={isLoggedIn ? <Billing /> : <Navigate replace to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage />
    </Router>
  );
}

export default App;
