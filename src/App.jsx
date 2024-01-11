import { useState } from 'react';
import './App.css';
import RationalHeader from './Components/RationalHeader';
import RationalSteps from './Components/RationalSteps';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const [darkMode ,setdarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark': 'light'
    }
  });

  return (
    <>
      <div >
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <RationalHeader mode={darkMode} toggle={(a)=>setdarkMode(a)}/>
        <RationalSteps/>
      </ThemeProvider>
      
    </div> 
    </>
  )
}

export default App
