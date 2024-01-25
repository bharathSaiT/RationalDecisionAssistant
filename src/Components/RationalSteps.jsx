import { Box, Container ,Grid, IconButton, Stepper, Typography ,Step ,StepButton, Alert, Link } from "@mui/material";
import { useState } from "react";
import ChoicesAndFactors from "./LandingPage/ChoicesAndFactors";
import FactorPrioritisation from "./FactorWeightage/FactorPrioritisation";
import ChoiceCurator from "./ChoiceWeightage/ChoiceCurator";
import Decision from "./Decision";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRecoilState, useRecoilValue } from "recoil";
import choicesState from "../recoil/atoms/choicesState";
import factorsState from "../recoil/atoms/factorsState";

const steps =["Choices & Factors " , "Factors weightage" ,"Rate Choices ","Scores"];
const alerts = ["There should be atleast two Choices!" , " There should be atleast 2 Factors!"]

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
    const choices = useRecoilValue(choicesState);
    const factors = useRecoilValue(factorsState);

    const shouldDisplayAlert = choices.length < 2 || factors.length < 2;

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
            <Container maxWidth= "xl" id="body" style={{ maxHeight: "calc(100vh - 140px)", overflowY: "auto" }}>
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
                        }} disabled={shouldDisplayAlert && (index === 1 || index === 2 || index === 3)} >
                        {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
            {getStepContent(activeStep)}
            </div>
            </Box>
            
            </Container>
            <div id="alert" style={{
                display:"flex",
                justifyContent:"center",
                width: "100%",
                padding:"25px",
                zIndex: -2,
                position: "fixed",
                bottom: 100,
            }}>
                {
                    shouldDisplayAlert && (
                        <Alert variant="outlined" severity="warning">
                            {alerts[choices.length > 1 ? 1 : 0]}
                        </Alert>
                    )
                }
            </div>
            <div style={{
                position: "fixed",
                bottom:20,
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                zIndex: +2
            }}>
                <Typography variant="body2">
                    Made with ❤️ by {' '}
        <Link href="https://www.linkedin.com/in/bharath-sai-tannidi/" target="_blank" rel="noopener noreferrer">
            Bharath
        </Link>
                </Typography>
                <Typography variant="body2">
                    <a href="https://github.com/bharathSaiT/RationalDecisionAssistant" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </Typography>
            </div>
            
            <div id="bottomnavigation" style={{
                display:"flex",
                justifyContent:"space-around",
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
                <IconButton disabled={shouldDisplayAlert || (activeStep == steps.length-1 ? true :false)}  size="large"
                onClick={()=>{Navigation(true)}}>
                    <ArrowForwardIosIcon/>
                </IconButton>
                
            </div>
            
        </>
        
    )
}

export default RationalSteps;