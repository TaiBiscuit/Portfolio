import './App.css'
import { Contact, Home, Navbar, Projects, About } from './components';
import { ViewModeProvider } from './context/viewModeContext';

function App() {


  return (
    <>
      <div id="appBody">
      <ViewModeProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      </ViewModeProvider>
      </div>
    </>
  )
}

export default App
