import { AddCircleRounded, DeleteRounded } from "@mui/icons-material";
import { IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import factorsState from "../../recoil/atoms/factorsState";
import choicesState from "../../recoil/atoms/choicesState";
import { v4 as uuidv4 } from 'uuid';

function EditListComponent({title, choices}){

    const [data, setdata] = useRecoilState(choices ? choicesState : factorsState);

    const [input ,setinput ]= useState(" ");
    const initialWeight = 0;

    function handleAddition(){
        // const newData = data;
        // newData.push(input); 
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
        const newArray = data.map((element)=>{
            return(
                element.id === value.id ? {...element , name: name}: element
            )
        })
        setdata(newArray);
    }

    return(
        <>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" 
                    ,flexDirection:"column"}} >
                <Typography component='span' variant='h4' style={{ marginBottom: "10px" }}>
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
                        <TextField id="filled-basic" label="New Entry" variant="filled" size="large"
                        style={{ flex: 1 }} value={input} onChange={(e)=>{
                            setinput(e.target.value);
                        }}/>

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
                                <TextField id="filled-basic" label="New Entry" variant="filled" size="large"
                                style={{ flex: 1 }} value={entry.name} onChange={(e)=>{
                                    handleUpdation(entry,e.target.value);
                                }}/>

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