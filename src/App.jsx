import './App.css'
import { Contact, Home, Navbar, Projects, About } from './components';
import { ViewModeProvider } from './context/viewModeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {


  return (
    <>
      <div id="appBody">
      <LanguageProvider>
      <ViewModeProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      </ViewModeProvider>
      </LanguageProvider>
      </div>
    </>
  )
}

export default App
