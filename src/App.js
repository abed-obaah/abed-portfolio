import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
