import React from 'react';
import { Contact, Home, Navbar, Projects, About, Extras } from '../components';

export const ES = () => {
    
    return (
    <>
      <Navbar lang={'en'} /> 
      <Home />
      <About />
      <Projects />
      <Extras />
      <Contact />
    </>
    )
}