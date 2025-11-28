import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return React.createElement('div', { className: 'App' },
    React.createElement(Header, null),
    React.createElement(Hero, null),
    React.createElement(About, null),
    React.createElement(Projects, null),
    React.createElement(Contact, null),
    React.createElement(Footer, null)
  );
}

export default App;