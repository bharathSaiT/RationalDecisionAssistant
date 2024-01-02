import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { Box, Container ,Grid, IconButton, Stepper, Typography ,Step ,StepButton } from "@mui/material";
import { useState } from "react";


function RationalHeader(){
    const [darkMode ,setdarkMode] = useState("false");

    const toggleTheme= ()=>{
        setdarkMode(prevState => !prevState);
    }

    return(
        <>
        <Container maxWidth= "xl" id="header container">
            <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"nowrap",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <Typography> rational decision maker</Typography>
                <div>
                        <IconButton onClick={toggleTheme} aria-label="toggle-theme">
                        {darkMode ? <DarkModeRounded /> : <LightModeRounded /> }
                        </IconButton>
                </div>
            </div>
        </Container> 

        
        </>
    )    
}

export default RationalHeader;