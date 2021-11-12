import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Home />
        <Home />
      </main>
    </div>
  );
}

export default App;
