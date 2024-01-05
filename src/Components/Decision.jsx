import { useRecoilState, useRecoilValue } from "recoil";
import factorsState from "../recoil/atoms/factorsState";
import choicesState from "../recoil/atoms/choicesState";
import factorWeightState from "../recoil/atoms/factorWeightState";
import { useEffect } from "react";
import choicesWithWeights from "../recoil/selectors/ChoicesWithWeights";
import { BarChart } from "@mui/x-charts";


function Decision(){

    const [choices, setchoices] = useRecoilState(choicesWithWeights);
    function scaleNumber(input, inMin, inMax, outMin, outMax) {
        return ((input - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
    }



    return (
        <>
            <div>
                {
                choices.map((choice)=>{
                    console.log(choice);
                    return(
                        <>
                            <div>
                             {choice.name}
                                <div>
                                {choice.weight}
                                </div>
                            </div>
                            <br></br>
                        </>
                        
                       
                        
                    )
                })
            }
            <BarGraph/>
            
            </div>
        </>
    )
}

function BarGraph(){
    const [choices, setchoices] = useRecoilState(choicesWithWeights);
    const chartSetting = {
        xAxis: [
          {
            label: 'Rational decision score',
            data: [1, 2,3,4, 5,6,7,8,9,10]
          }
          
        ],
        width: 500,
        height: 400,
      };

    return(
        <BarChart
        dataset={choices}
        yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
        series={[{ dataKey: 'weight', label: 'decision score' }]}
        layout="horizontal"
        {...chartSetting}
        >
        </BarChart>
    )
}


export default Decision;