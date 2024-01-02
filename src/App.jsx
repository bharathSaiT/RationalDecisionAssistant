import { useState ,useEffect } from 'react'
import './App.css'
import { Typography ,Toolbar , IconButton , Button, Stepper,Step, StepLabel} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Components/Navbar';
import Rationale from './Components/Rationale';
import RationalHeader from './Components/RationalHeader';
import RationalSteps from './Components/RationalSteps';
import ChoicesAndFactors from './Components/ChoicesAndFactors/ChoicesAndFactors';

function App() {

  return (
    <>
      <div >
      <RationalHeader/>
      <RationalSteps/>
    </div> 
    </>
  )
}

export default App
