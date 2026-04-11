import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BannerHeader from './components/BannerHeader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Team from './pages/Team.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-body">
        <BannerHeader />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
