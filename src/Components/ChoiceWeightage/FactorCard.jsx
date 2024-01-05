import { Typography, Paper } from "@mui/material";
import { useRecoilValue } from "recoil"; 
import choicesState from "../../recoil/atoms/choicesState";
import ChoiceSlider from "./ChoiceSlider";

function FactorCard ({factor}){
    const choices = useRecoilValue(choicesState);

    return(
        <>
            <Paper elevation={24} style={{ flex: "0 0 calc(30% - 15px)" ,padding: "15px"}}>
                <div style={{
                display:"flex",
                flexFlow:"column wrap",
                justifyContent:"space-around",
                alignItems:"center",
                gap:"10px"
            }}>
                    <Typography variant="h5"> {factor.name}</Typography>
                    <div style={{
                        width: "100%"
                    }}>
                    {choices.map((choice)=>{
                            return <ChoiceSlider factor={factor} choice={choice}/>;
                    })}
                    </div>
                </div>
            </Paper>
            
        </>
    )

}

export default FactorCard;