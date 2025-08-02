import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Team from './components/Team';
import Merch from './components/Merch';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Team />
      <Merch />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;