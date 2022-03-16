import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';
import App from './App';
import Meaning from './Meaning';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/meaning/:slug" element={<Meaning />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
