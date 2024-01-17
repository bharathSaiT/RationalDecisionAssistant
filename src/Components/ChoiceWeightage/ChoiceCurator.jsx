import { useRecoilValue } from "recoil";
import factorsState from "../../recoil/atoms/factorsState";
import FactorCard from "./FactorCard";
import { Typography } from "@mui/material";

function ChoiceCurator(){

    
    const factors = useRecoilValue(factorsState);

    return(<>
        <div align="center" style={{ marginBottom: "15px" }}>
            <Typography component='span' variant='h4'>
                    Rate Choices
                    </Typography>
        </div>
            <div style={{
                display:"flex",
                flexFlow: "row wrap",
                justifyContent: "space-around",
                alignContent:"center",
                alignItems:"center",
                gap:"15px"
            }}>
                
                {
                    factors.map((factor,index)=>{
                        return <FactorCard key={index} factor={factor}></FactorCard>;
                        // return <p>heylo</p>
                    })
                }
            </div>
    </>)
}

export default ChoiceCurator;