import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact />
      </Router>
    </div>
  );
}

export default App;
