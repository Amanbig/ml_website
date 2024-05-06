// app.js
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'; 
import About from './components/About';
import Dashboard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
