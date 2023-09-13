import React from 'react';
import { Contact, Home, Navbar, Projects, About } from '../components';

export const Default = () => {
    
    return (
    <>
      <Navbar lang={'es'} /> 
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
    )
}