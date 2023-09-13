import './App.css'
import { MainRoutes } from './routes/MainRoutes';
import { ViewModeProvider } from './context/viewModeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  return (
    <>
      <div id="appBody">
      <LanguageProvider>
      <ViewModeProvider>
        <MainRoutes />
      </ViewModeProvider>
      </LanguageProvider>
      </div>
    </>
  )
}

export default App
