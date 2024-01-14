import { Box, Container ,Grid, IconButton, Stepper, Typography ,Step ,StepButton } from "@mui/material";
import { useState } from "react";
import ChoicesAndFactors from "./LandingPage/ChoicesAndFactors";
import FactorPrioritisation from "./FactorWeightage/FactorPrioritisation";
import ChoiceCurator from "./ChoiceWeightage/ChoiceCurator";
import Decision from "./Decision";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const steps =["step1 " , "step 2" ,"step 3","step 4"];

function getStepContent(step){
    switch(step){
        case 0 :
            return <><ChoicesAndFactors/></>
        case 1 :
            return <>< FactorPrioritisation/></>
        case 2 :
            return <><ChoiceCurator></ChoiceCurator></>
        case 3 :
            return <><Decision/></>
    }


}
function RationalSteps(){
    
    const [activeStep, setActiveStep] = useState(0);
    const [completed , setcompleted] = useState({});

    const handleStep = (index)=>{
        const newComp = completed;
        newComp[index] = true;
        setcompleted(newComp);
        setActiveStep(index);
    }

    function Navigation(forward){
        forward? handleStep(activeStep+1): handleStep(activeStep-1)
    }


    return(
        <>
            <Container maxWidth= "xl" id="body" >
            {/* //when the criteria of adding atleast 2 of each decisions & factors 
            //is met , we have to make this stepper non-linear 
            //completet first step after clicking on next page
            */}
            <Box maxWidth= "xl" maxHeight={"100vh"} padding={"25px"}>
            <Stepper alternativeLabel nonLinear= {true} style={{
                marginBottom:"30px"
            }}>
                {steps.map((label, index) => (
                    <Step key={label}  completed={completed[index]}>
                        <StepButton color="inherit" onClick={()=>{
                            handleStep(index);
                        }}>
                        {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
  
                {getStepContent(activeStep)}
                {console.log(activeStep , steps.length)}
            </Box>
            
            </Container>
            <div id="bottomnavigation" style={{
                display:"flex",
                justifyContent:"space-between",
                position: "fixed",
                bottom: 0,
                width: "100%",
                padding:"25px",
                zIndex: -1
            }}>
                <IconButton disabled={activeStep == 0 ? true :false} size="large"
                onClick={()=>{Navigation(false)}} >
                    <ArrowBackIosNewIcon/>
                </IconButton>
                <IconButton disabled={activeStep == steps.length-1 ? true :false}  size="large"
                onClick={()=>{Navigation(true)}}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </div>
        </>
        
    )
}

export default RationalSteps;