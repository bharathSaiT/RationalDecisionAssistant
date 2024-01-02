import { Card, Slider } from "@mui/material";


function FactorPrioritisation(){
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
                <div style={{
                    flex: "0 0 calc(30% - 10px)",
                    margin: "5px"
                }}>
                        <Slider id ="2"
                    disabled={false}
                    marks
                    max={10}
                    min={0}
                    size="small"
                    valueLabelDisplay="on"
                ></Slider>
                </div>
         </div>
         
        </>
    )

}

export default FactorPrioritisation;