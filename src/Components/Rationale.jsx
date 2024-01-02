import { NavigateBefore, NavigateBeforeOutlined, NavigateBeforeSharp, NavigateNextOutlined, NavigateNextRounded, NavigateNextSharp } from '@mui/icons-material';
import { Typography ,Toolbar , IconButton , Button, Stepper,Step, StepLabel, StepButton,Switch, Container} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';


//export constants and string from a seperate file
const steps =["step1 " , "step 2" ,"step 3"];

//what does this component do?
//this component has the navigation from everystep and renders the new screen in evry step

function Rationale() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const x =  (
    <div style={{
      display:"flex",
      height: "100vh",
      width:"100vw"
    }}>
      <div style={{
      width:"100vw"
    }}>
       <Stepper alternativeLabel activeStep={activeStep} nonLinear = {true}>
       {steps.map((step ,index )=>{
          return(
            <Step key={step} completed={completed[index]}>
               <StepButton color="inherit" onClick={handleStep(index)}>
              {step}
            </StepButton>
            </Step>
          )
       })}
       </Stepper>
       <div style={{padding :"100px"}}>
          <Typography>
            Step  {activeStep+1}
          </Typography>
          <div style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
              <Button>
                Back
              </Button>
                <Button>
                  Next
                </Button>
          </div>
      </div> 
      </div>
    </div>
  )
   return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' , width :'100vw'}} >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
    {/* Top Left: Switch Button */}
    <Switch
      value={true}  />
      {/* // Set the initial state of the switch */}
      {/* // onChange={handleSwitchChange}  // Add your switch change handler */}
    
    {/* Top Right: Application Name */}
    <Typography variant="h6">Your Application</Typography>
      </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px',
          paddingLeft: '10px',
          backgroundColor: '#fff',
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'  }}>
            hello check this
          </div>

        <div style={{ 

          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px',
          paddingleft: '1px',
          position: "fixed",
          bottom: 0,
          left:0,
          width: "100vw",
          backgroundColor: '#fff',  // Optional background color
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
           }}>
          {/* Bottom Left: Navigation Arrow - Left */}
          <IconButton aria-label="navigate-before">
            <NavigateBeforeOutlined />
          </IconButton>
          {/* Bottom Right: Navigation Arrow - Right */}
          <IconButton aria-label="navigate-next">
            {/* <NavigateNextSharp /> */}
            {/* <br/> */}
            <NavigateNextOutlined/>
          </IconButton>
        </div>
      </Box>
        
    </Container>
      
    
  )
  // return ( <>
  //   <Container maxWidth="sm">
  //     <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
  //       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
  //         {/* Top Left: Switch Button */}
  //         {/* Your Switch component goes here */}
  //         {/* Top Right: Application Name */}
  //         {/* Your Typography component goes here */}
  //       </div>

  //       {/* Your main content goes here */}

        // <div style={{ 
        //   display: 'flex', 
        //   justifyContent: 'space-between', 
        //   alignItems: 'center', 
        //   padding: '20px',
        //   paddingLeft: '10px', 
        //   backgroundColor: '#fff',
        //   boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'  
        // }}>
        //   hello check this
        // </div>

        // <div style={{ 
        //   display: 'flex', 
        //   justifyContent: 'space-between', 
        //   alignItems: 'center', 
        //   padding: '20px',
        //   paddingLeft: '1px',
        //   position: "fixed",
        //   bottom: 0,
        //   left: 0,
        //   width: "100vw",
        //   backgroundColor: '#fff',
        //   boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)' 
        // }}>
  //         {/* Bottom Left: Navigation Arrow - Left */}
  //         <IconButton aria-label="navigate-before">
  //           <NavigateBeforeOutlined />
  //         </IconButton>
  //         {/* Bottom Right: Navigation Arrow - Right */}
  //         <IconButton aria-label="navigate-next" style={{
  //           paddingLeft :"50px"
  //         }}>
  //           <NavigateNextOutlined />
  //         </IconButton>
  //       </div>
  //     </Box>
  //   </Container>
  // </>)
}

export default Rationale