import React, { useState } from 'react';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import About from './components/About';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onRegisterClick={scrollToRegistration} />
      <CountdownTimer />
      <About />
      <Timeline />
      <Registration />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;