import { Typography, Slider } from "@mui/material";
import { useState,useEffect } from "react";
import { useRecoilState } from "recoil";
import choicesState from "../../recoil/atoms/choicesState";
import factorWeightState from "../../recoil/atoms/factorWeightState";

function ChoiceSlider({factor,choice}){
    const sliderMarks = [
		{
			value: 20,
		},
		{
			value: 40,
		},
		{
			value: 60,
		},
		{
			value: 80,
		}
	];
    const [FactorWeights , setFactorWeights ] = useRecoilState(factorWeightState);
    const [sliderWeight , setsliderWeight] = useState( FactorWeights[factor.id]?.[choice.id] || 0);

    //remove initial weight if un-used.
    const [initialWeight, setInitialWeight] = useState(choice.weight);
    useEffect(() => {
        // Set the initial weight only once when the component mounts
        setInitialWeight(FactorWeights[factor.id]?.[choice.id] || 1 );
      }, []);
    

    function updateChoiceWeight(){
        setFactorWeights((prevWeights)=>{
           return {...prevWeights ,[factor.id]:{
                ...prevWeights[factor.id],
                [choice.id]:sliderWeight
            }}
        });
        console.log(FactorWeights);
    }
    
    return(
        <div style={{
            display:"flex",
            flexFlow:"row wrap",
            justifyContent: "flex-start",
            alignItems:"center",
            alignContent:"flex-start",
            columnGap:"25px"
        }}>
            <div 
            style={{
                flex: "1 1 20%", // Set flex to 1, basis to 20%, and grow/shrink accordingly
              }}>
                <Typography>
                    {choice.name}
                </Typography>
            </div>
            
            <div style={{ flex: "2 1 80%", width: "100%", minWidth:"200px" , maxWidth: "250px" }}>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    width:"100%"
                }}>
                        <Typography variant="caption">
                            Bad
                        </Typography>
                        <Typography variant="caption">
                            Good
                        </Typography>
                </div> 
                        <Slider max={100}
                            min={1}
                            marks={sliderMarks}
                            size="large"
                            value={sliderWeight}
                            valueLabelDisplay="auto"
                            style={{ width: "100%" }}
                            onChange={(e)=>{
                                setsliderWeight(e.target.value);
                                updateChoiceWeight();
                                console.log(sliderWeight);
                            }}>
                        </Slider>
            </div>
            

        </div>
    )
}
export default ChoiceSlider;