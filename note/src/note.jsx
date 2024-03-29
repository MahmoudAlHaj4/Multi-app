import React from "react";
import { useState } from "react";
import "./style.css"


const Notes =()=>{
     const [notes,setNotes] = useState([])

     const CreateNote = (e)=>{
        setNotes([...notes,""])
     }
     const InputChange = (index, newText) => {
        const updatedNotes = [...notes];
        updatedNotes[index] = newText;
        setNotes(updatedNotes);
    };
    return (
<div className="notes">
            <div className="heading">
                <h1>Notes</h1>
            </div>
            <div className="create-note">
                <div className="note-heading">
                    <h2>Note</h2>
                    <button>x</button>
                </div>
                
                <div>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}
export default Notes