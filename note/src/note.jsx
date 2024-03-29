import React from "react";
import { useState } from "react";
import "./style.css"


const Notes =()=>{
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