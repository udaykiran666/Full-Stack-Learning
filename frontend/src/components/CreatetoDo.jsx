import { useState } from "react";
import { ADD_TODO } from "./utils";

const CreateToDo = () => {
    
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const AddToDO = async ()=> {
        try{
        const response = await fetch(ADD_TODO, {method:"POST", headers: {"Content-Type": "application/json"}, 
                        body: JSON.stringify({title:title, description:description})});
        if (!response.ok) {
            throw new Error("Failed to submit the todo");
        }
        else{
            alert("ToDo Added Successfully")
        }
        settitle("");
        setdescription("");
        } catch (error){
            console.error("Error submitting todo:", error);
        }}

    return (
        <div>
            <input style={{padding: 10, margin: 10}}
            type="text" 
            placeholder="Title" 
            onChange={(event)=>{
                console.log('title',event.target.value);
                settitle(event.target.value);
            }}/><br></br>

            <input  style={{padding: 10,margin: 10}}
            type="text" 
            placeholder="Description" 
            onChange={(event)=>{
                console.log('description',event.target.value);
                setdescription(event.target.value);
            }}
            /><br></br><br></br>


            <button style={{padding: 10,margin: 10}}
            onClick={AddToDO}>Add a todo</button>
        </div>
    );
};

export default CreateToDo;
