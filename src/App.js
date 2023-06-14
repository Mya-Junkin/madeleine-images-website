import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import About from './pages/about';
import Athletics from './pages/athletics';
import Headshots from './pages/headshots';
import Seniors from './pages/seniors';
import Boudoir from './pages/boudoir';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/athletics" element={<Athletics />} />
        <Route path="/headshots" element={<Headshots />} />
        <Route path="/seniors" element={<Seniors />} />
        <Route path="/Boudoir" element={<Boudoir />} />
      </Routes>
    </div>
  );
}

export default App;
