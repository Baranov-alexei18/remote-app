import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import RemoteWrapper from '../src/pages/RemoteWrapper';
import Menu from '../src/components/Menu';

const App = () => (
  <BrowserRouter>
    <h2>Webpack Module Federation</h2>
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Menu />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/remote-page" element={<RemoteWrapper />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
