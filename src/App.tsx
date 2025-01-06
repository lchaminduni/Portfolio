
import './App.css'
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';

function App() {
  return (
    <Router >
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Define Routes for Navigation */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<AboutMe />} /> {/* About Me Page */}
          <Route path="/resume" element={<Resume/>} />{/*Resume Page*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 