import { useRecoilState, useRecoilValue } from "recoil";
import factorsState from "../recoil/atoms/factorsState";
import choicesState from "../recoil/atoms/choicesState";
import factorWeightState from "../recoil/atoms/factorWeightState";
import { useEffect } from "react";
import choicesWithWeights from "../recoil/selectors/ChoicesWithWeights";
import { BarChart } from "@mui/x-charts";
import { Typography, Paper } from "@mui/material";


function Decision(){

    const [choices, setchoices] = useRecoilState(choicesWithWeights);
    return (
        <>
            <div style={{
                display:"flex",
                flexDirection:"column",
                flexWrap:"wrap",
                alignItems:"center",
                gap:"15px"
            }}>
                {
                choices.map((choice)=>{
                    console.log(choice);
                    return(
                        <Paper elevation={24}>
                                <div style={{
                                display:"flex",
                                flexDirection:"row",
                                alignItems:"center",
                                gap:"50px"
                            }}>
                                <Typography>
                                        {choice.name}
                                    </Typography>
                                    <Typography>
                                        {choice.weight}
                                    </Typography>  
                            </div>
                        </Paper>                        
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
        width: 800,
        height: 500,
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