import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SlideRoutes from './components/SlideRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <SlideRoutes />
      </div>
    </Router>
  );
}

export default App;