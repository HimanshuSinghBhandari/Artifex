import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./service/firebase"
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
import SettingSec from './pages/setting';
import Document from './pages/document';
import ContentGeneration from './pages/contentgenerationpage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
     {!isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Front />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/signup" element={<Signup />} />
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/setting" element={<SettingSec />} />
            <Route path="/document" element={<Document />} />
            <Route path="/contentgeneration" element={<ContentGeneration />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Navigate to="/login" />} />
            <Route path="/billing" element={<Navigate to="/login" />} />
            <Route path="/setting" element={<Navigate to="/login" />} />
            <Route path="/document" element={<Navigate to="/login" />} />
            <Route path="/contentgeneration" element={<Navigate to="/login" />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage />
    </Router>
  );
}

export default App;
