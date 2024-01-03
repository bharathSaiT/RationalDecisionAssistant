import { useState } from "react";
import FactorWeightageCard from "./FactorWeightageCard";
import { useRecoilState, useRecoilValue } from "recoil";
import factorsState from "../recoil/atoms/factorsState";


function FactorPrioritisation(){
  
    const factors = useRecoilValue(factorsState);
    
    return(
        <>
         hello from factor prioritisation
         
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