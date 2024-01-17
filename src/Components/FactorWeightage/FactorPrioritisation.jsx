import { useState } from "react";
import FactorWeightageCard from "./FactorWeightageCard";
import { useRecoilState, useRecoilValue } from "recoil";
import factorsState from "../../recoil/atoms/factorsState";
import { Typography } from "@mui/material";


function FactorPrioritisation(){
  
    const factors = useRecoilValue(factorsState);
    
    return(
        <>
        <div align="center" style={{ marginBottom: "15px" }}>
            <Typography component='span' variant='h4' >
                    Factors Weightage
                    </Typography>
        </div>
        
         
            <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    alignItems:"center",
                    justifyContent:"space-around",
                    alignContent:"center"

                }}>
                {factors.map((factor,index) => {
                    return (
                        <FactorWeightageCard 
                    factor={factor}></FactorWeightageCard>
                    )
                })}                      
            </div>
        </>
    )

}


export default FactorPrioritisation;