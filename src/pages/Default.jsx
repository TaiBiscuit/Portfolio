import React from 'react';
import { Contact, Home, Navbar, Projects, About, Extras } from '../components';

export const Default = () => {
    
    return (
    <>
      <Navbar lang={'es'} /> 
      <Home/>
      <About/>
      <Projects/>
      <Extras/>
      <Contact/>
    </>
    )
}