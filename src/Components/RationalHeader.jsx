import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { Box, Container ,Grid, IconButton, Stepper, Typography ,Step ,StepButton } from "@mui/material";
import { useState } from "react";


function RationalHeader({mode , toggle}){

    const toggleTheme= ()=>{
        toggle(!mode);
    }

    return(
        <>
        <Container maxWidth= "xl" id="header container">
            <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"nowrap",
                justifyContent:"space-between",
                alignItems:"center",
                padding:"15px"
            }}>
                
                <Typography component="div" > 
                    <Box sx={{ typography: 'body1'}}>Rational Decision Assistant</Box>
                </Typography>
                <div>
                        <IconButton onClick={toggleTheme} aria-label="toggle-theme">
                        {mode ? <DarkModeRounded /> : <LightModeRounded /> }
                        </IconButton>
                </div>
            </div>
        </Container> 

        
        </>
    )    
}

export default RationalHeader;