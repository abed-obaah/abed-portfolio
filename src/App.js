import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from "./components/About";
import Services from './components/Services';
import Projects from './components/Projects';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
      </main>
    </div>
  );
}

export default App;
