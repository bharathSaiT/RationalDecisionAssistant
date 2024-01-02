import { Box, Container ,Grid, IconButton, Stepper, Typography ,Step ,StepButton } from "@mui/material";
import { useState } from "react";
import ChoicesAndFactors from "./ChoicesAndFactors/ChoicesAndFactors";
import FactorPrioritisation from "./FactorPrioritisation";

const steps =["step1 " , "step 2" ,"step 3","step 4"];

function getStepContent(step){
    switch(step){
        case 0 :
            return <><ChoicesAndFactors/></>
        case 1 :
            return <>< FactorPrioritisation/></>
        case 2 :
            return <>factors weightage in choices</>
        case 3 :
            return <>results</>
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


    return(
        <Container maxWidth= "xl" id="body" >
            {/* //when the criteria of adding atleast 2 of each decisions & factors 
            //is met , we have to make this stepper non-linear 
            //completet first step after clicking on next page
            */}
            <Box maxWidth= "xl" maxHeight={"100vh"} padding={"25px"}>
            <Stepper alternativeLabel nonLinear= {true}>
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
            <br></br>
            {getStepContent(activeStep)}
            <br></br>
            {activeStep == steps.length-1 ? "completion": "in process"}
            
            </Box>
            
        </Container>
    )
}

export default RationalSteps;