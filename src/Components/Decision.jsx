import { useRecoilState, useRecoilValue } from "recoil";
import factorsState from "../recoil/atoms/factorsState";
import choicesState from "../recoil/atoms/choicesState";
import factorWeightState from "../recoil/atoms/factorWeightState";
import { useEffect } from "react";
import choicesWithWeights from "../recoil/selectors/ChoicesWithWeights";
import { BarChart, LineChart } from "@mui/x-charts";
import { Typography, Paper } from "@mui/material";


function Decision(){

    const choices = useRecoilValue(choicesWithWeights);
    const choiceArray =  [...choices];
    choiceArray.sort((a, b) => b.weight - a.weight);
    // console.log( choiceArray)
    return (
        <>
        {/* <DataDisplay choices={choices}/> */}
            <div style={{
                display:"flex",
                justifyContent:"center",
                maegin:"45px",
            }}>
            <Paper elevation={24}>
                <BarGraph/>
            </Paper>
            </div>
                <Typography variant="h6" component="div" style={{ textAlign: 'center' ,margin:"20px"}}>
                    {choiceArray[0].name} has the highest rational decision score of {choiceArray[0].weight}.
                </Typography>   
        </>
    )
}

function BarGraph(){
    const choices = useRecoilValue(choicesWithWeights);
    const chartSetting = {
        xAxis: [
          {
            label: 'Rational decision score',
          }
          
        ],
        width: 700,
        height:400
      };
      const names = choices.map(choice => choice.name);
      const weights = choices.map(choice=> choice.weight);

    return(
        //horizontal chart - issue with y axis labels
        // <div style={{ overflowY: 'auto' }}>
        //     <BarChart 
        //     dataset={choices}
        //     yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
        //     series={[{ dataKey: 'weight', label: 'Decision score',  }]}
        //     layout="horizontal"
        //     {...chartSetting}
        //     >
        //     </BarChart>
        // </div>
        <>
            {/* <BarChart
                xAxis={[
                    {
                    id: 'decisions',
                    data: names,
                    scaleType: 'band',
                    label: "Rational Decision Score"
                    },
                ]}
                series={[
                    {
                    data:weights,
                    label: "Decision score"
                    }
                ]}
                width={700}
                height={400}
                /> */}

                <LineChart
                width={500}
                height={300}
                series={[
                    { data: weights, label: 'Decision score' },
                ]}
                xAxis={[{ scaleType: 'point', data: names , label: 'Rational decision score'}]}
                />
        </>
    )
}

function DataDisplay({choices}){

    return (
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
        
        </div>
    )
}
export default Decision;