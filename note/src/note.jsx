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

    const deleteNote = (dnote) => {
        const delNote = notes.filter((note, index) => index !== dnote);
        setNotes(delNote);
    };
    return (
<div className="notes">
            <button onClick={CreateNote}>Create</button>
            {notes.map((note, index) => (
                <div className="card" key={index}>
                    <div className="create-note">
                        <div className="note-heading">
                            <h3>Note</h3>
                            <div>
                                <button className="del" onClick={() => deleteNote(index)}>x</button>
                            </div>
                            
                        </div>
                        <div className="text">
                            <input 
                                type="text"
                                value={note} 
                                onChange={(e) => InputChange(index, e.target.value)}
                                placeholder="Enter your note" 
                            />
                        </div>
                    </div>
                </div>
            ))}
           
        </div>
    )
}
export default Notes