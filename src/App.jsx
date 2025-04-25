import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Origem from './pages/Origem';
import Estetica from './pages/Estetica';
import Silenciamento from './pages/Silenciamento';
import Morte from './pages/Morte';
import Ressurgencia from './pages/Ressurgencia';

function App() {
  const [language, setLanguage] = useState('pt');

  return (
    <Router>
      <div className="language-switcher">
        <button onClick={() => setLanguage('pt')}>PT</button>
        <button onClick={() => setLanguage('en')}>EN</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origem" element={<Origem language={language} />} />
        <Route path="/estetica" element={<Estetica language={language} />} />
        <Route path="/silenciamento" element={<Silenciamento language={language} />} />
        <Route path="/morte" element={<Morte language={language} />} />
        <Route path="/ressurgencia" element={<Ressurgencia language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;
