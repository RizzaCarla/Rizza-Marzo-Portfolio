import './App.css';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
