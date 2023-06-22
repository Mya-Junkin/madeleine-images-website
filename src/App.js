import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Grid } from '@mui/material';

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
        <Grid container>
        <Grid item>
            <Sidebar />
        </Grid>
        <Grid item xs={12} sm container >
          <Grid item xs container direction="column">
            <Grid item xs>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/athletics" element={<Athletics />} />
                <Route path="/headshots" element={<Headshots />} />
                <Route path="/seniors" element={<Seniors />} />
                <Route path="/Boudoir" element={<Boudoir />} />
              </Routes>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
