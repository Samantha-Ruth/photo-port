import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <Gallery />
          <About />        
      </main>
    </div>
  );
}

export default App;
