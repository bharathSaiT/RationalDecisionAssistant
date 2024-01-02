import { Card, Paper, Slider, Typography } from "@mui/material";
import { useState } from "react";


function FactorPrioritisation(){

    const [sliderweight ,setsliderweight] = useState(0);
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
                    {/* //this is the card component to weigh the choices. */}
                    <WeightageCard sliderweight ={sliderweight} setsliderweight={(data)=>{setsliderweight(data)}}></WeightageCard>
                </div>

            
         
        </>
    )

}

function WeightageCard(props){
    const sliderMarks = [
		{
			value: -66.6,
		},
		{
			value: -33.3,
		},
		{
			value: 0,
		},
		{
			value: 33.3,
		},
		{
			value: 66.6,
		},
	];

    return(
        <>
            <Paper elevation={24} style={{ flex: "0 0 calc(30% - 10px)" ,margin: "10px"}}>
                    <div style={{
                            flex: "0 0 calc(30% - 10px)",
                            margin: "15px",
                            flexDirection:"column"
                        }}>
                            <div 
                                style={{
                                    display:"flex",
                                    justifyContent:"space-between",
                                    alignItems:"center"
                                }}>
                                    <Typography>
                                        Choice 1
                                    </Typography>
                                    <Typography>
                                        Choice 2
                                    </Typography>
                            </div>
                            <Slider 
                                    disabled={false}
                                    track={false}
                                    marks={sliderMarks}
                                    max={100}
                                    min={-100}
                                    size="small"
                                    value={props.sliderweight}
                                    valueLabelDisplay="off"
                                    onChange={(e)=>{
                                        props.setsliderweight(e.target.value)
                                    }}
                            ></Slider>
                            <div style={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Typography variant='caption' align="center">
                                {getWeightInfoText(props.sliderweight, "choice 1" , "choice 2" )}
                                </Typography>
                            </div>
                            
                        </div>
                    </Paper>  
        </>
    )
}

const getWeightInfoText = (weight, selectionCriteria1Id, selectionCriteria2Id) => {
    const selectionCriteria1Name = selectionCriteria1Id;
    const selectionCriteria2Name = selectionCriteria2Id;

    switch (true) {
        case weight < -66:
            return `${selectionCriteria1Name} is way more important than ${selectionCriteria2Name}`;
        case weight < -33:
            return `${selectionCriteria1Name} is more important than ${selectionCriteria2Name}`;
        case weight < -5:
            return `${selectionCriteria1Name} is a little more important than ${selectionCriteria2Name}`;
        case weight < 5:
            return `${selectionCriteria1Name} is as important as ${selectionCriteria2Name}`;
        case weight < 33:
            return `${selectionCriteria2Name} is a little more important than ${selectionCriteria1Name}`;
        case weight < 66:
            return `${selectionCriteria2Name} is more important than ${selectionCriteria1Name}`;
        case weight <= 100:
            return `${selectionCriteria2Name} is way more important than ${selectionCriteria1Name}`;
        default:
            return '';
    }
};

export default FactorPrioritisation;