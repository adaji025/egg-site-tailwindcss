import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Dropdown } from './components/Dropdown';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Menu } from './pages/menu';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen) {
      setIsOpen(false)
      console.log('Resized')
    }
  };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  });
  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu"  component={Menu} />
        <Route path="/about"  component={About} />
        <Route path="/contact"  component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
