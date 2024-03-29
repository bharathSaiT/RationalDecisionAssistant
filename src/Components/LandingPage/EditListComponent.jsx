import { AddCircleRounded, DeleteRounded } from "@mui/icons-material";
import { IconButton, TextField, Typography , Tooltip} from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import factorsState from "../../recoil/atoms/factorsState";
import choicesState from "../../recoil/atoms/choicesState";
import { v4 as uuidv4 } from 'uuid';

function EditListComponent({title, choices}){

    const [data, setdata] = useRecoilState(choices ? choicesState : factorsState);

    const [input ,setinput ]= useState(" ");
    const initialWeight = 1;

    function handleAddition(){
        // const newData = data;
        // newData.push(input); 
        if (input.trim() === "") {
            // Do not proceed if input is an empty string
            return;
        }
        const newData = [...data, { "id": uuidv4(), "name": input, "weight": initialWeight }];
        setdata(newData);
        setinput("");
        // newData[0].value ="emotion";
        console.log(newData);
    }

    function handleDeletion(value){
        const newData = data.filter( item => item!== value);
        setdata(newData);
    }

    function handleUpdation(value,name){
        if (name.trim() === "") {
            // Do not proceed if input is an empty string
            handleDeletion(value);
        }
        const newArray = data.map((element)=>{
            return(
                element.id === value.id ? {...element , name: name}: element
            )
        })
        setdata(newArray);
    }

    return(
        <>
            <div style={{ width: "50%", 
                display: "flex",
                justifyContent: "center", 
                alignItems: "center" ,
                alignContent:"center",
                flexDirection:"column",
                flexWrap:"wrap"}} >
                <Typography component='span' variant='h4' textAlign="center" style={{ marginBottom: "10px" }}>
                    {title}
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
                        <Tooltip title="Add New Entry" arrow>
                            <TextField id="filled-basic" label="New Entry" variant="filled" size="large"
                            style={{ flex: 1 }} value={input} onChange={(e)=>{
                                setinput(e.target.value);
                            }}/>
                        </Tooltip>
                        

                        <IconButton onClick={()=>{
                            handleAddition();
                            // console.log("added");
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
                                <Tooltip title="Edit Entry" arrow>
                                <TextField id="filled-basic" label="New Entry" variant="filled" size="large"
                                style={{ flex: 1 }} value={entry.name} onChange={(e)=>{
                                    handleUpdation(entry,e.target.value);
                                }}/>
                                </Tooltip>
                                

                                <IconButton onClick={()=>{
                                    handleDeletion(entry ,index);
                                    // console.log("deleted");
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

export default EditListComponent;