import { useState } from "react";
import EditListComponent from "./EditListComponent";


function ChoicesAndFactors(){
    // const[choices , setchoices]  = useState([]);
    // const[factors , setfactors]  = useState([]);

    return (
        <>
            <div style={{
                display:"flex",
                flexFlow:"row wrap",
                justifyContent:"space-around",
                alignItems:"flex-start",
                alignContent:"center",
                "padding":"15px"
            }}>
                <EditListComponent title={"Available choices"} choices={true}></EditListComponent>

                <EditListComponent title={"Influencing factors"} choices={false}></EditListComponent>
            </div>
        </>
    )
}


export default ChoicesAndFactors;