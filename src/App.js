import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Add your components for other sections here */}
      </div>
    </Router>
  );
}

export default App;