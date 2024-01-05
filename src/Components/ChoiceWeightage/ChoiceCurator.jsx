import { useRecoilValue } from "recoil";
import factorsState from "../../recoil/atoms/factorsState";
import FactorCard from "./FactorCard";

function ChoiceCurator(){

    
    const factors = useRecoilValue(factorsState);

    return(<>
            <div style={{
                display:"flex",
                flexFlow: "row wrap",
                justifyContent: "space-around",
                alignContent:"center",
                alignItems:"center"
                
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