import { AddCircleRounded, DeleteRounded } from "@mui/icons-material";
import { IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";


function ChoicesAndFactors(){
    const[choices , setchoices]  = useState([]);
    const[factors , setfactors]  = useState([]);

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
                <EditListComponent title={"Available choices"} 
                list={choices} setdata={(data)=>{setchoices(data)}}></EditListComponent>

                <EditListComponent title={"Influencing factors"}
                list={factors} setdata={(data)=>{setfactors(data)} }></EditListComponent>
            </div>
        </>
    )
}


function EditListComponent(props){

    const data = props.list;
    const [input ,setinput ]= useState(" ");

    function handleAddition(){
        // const newData = data;
        // newData.push(input);
        const newData = [...data,input];
        props.setdata(newData);
        setinput("");
        console.log(input);
    }

    function handleDeletion(value , index){
        const newData = data.filter( item => item!== value);
        props.setdata(newData);
    }

    return(
        <>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" 
                    ,flexDirection:"column"}} >
                <Typography component='span' variant='h4' style={{ marginBottom: "10px" }}>
                    {props.title}
                    </Typography>
                    <br/>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap: "20px",
                        width: "50%" ,
                        padding:"5px"
                        
                    }}>
                        <TextField id="filled-basic" label="New Choice" variant="filled" size="large"
                        style={{ flex: 1, marginRight: "10px" }} value={input} onChange={(e)=>{
                            setinput(e.target.value);
                        }}/>

                        <IconButton onClick={()=>{
                            handleAddition();
                            console.log("added");
                        }} >
                            <AddCircleRounded/>
                            
                        </IconButton>
                        
                    </div>
                    {data.map((entry,index)=>{
                        return (
                            <div  key={index}  style={{
                                display:"flex",
                                flexDirection:"row",
                                alignItems:"center",
                                gap: "20px",
                                width: "50%" ,
                                padding:"5px"
                                
                            }}>
                                <TextField id="filled-basic" label="New Choice" variant="filled" size="large"
                                style={{ flex: 1 }} value={entry}/>
                                <IconButton onClick={()=>{
                                    handleDeletion(entry ,index);
                                    console.log("deleted");
                                }} >
                                    <DeleteRounded/>
                                </IconButton>
                                
                            </div>
                        )
                    })}


                </div>
        </>
    )
    
}

export default ChoicesAndFactors;