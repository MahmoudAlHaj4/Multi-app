import React from "react";
import { useState } from "react";
import "./style.css"

const Calculator =()=>{
    const [value,setValue] = useState('')
    return (
        <div className="container">
            <div className="Calc-box">
                <form action="">
                    <div className="display">
                        <input type="text" value={value}/>
                    </div>
                    <div className="btns">
                        <div>
                            <input type="button" value="AC" onClick={(e)=>{setValue("")}}/>
                            <input type="button" value="DE" onClick={(e)=>{setValue(value.slice(0,-1))}}/>
                            <input type="button" value="." onClick={(e)=>{setValue(value + e.target.value)}}/>
                            <input type="button" value="/" onClick={(e)=>{setValue(value + e.target.value)}}/>
                        </div>
                        <div>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="7"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="8"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="9"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="*"/>
                        </div>
                        <div>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="4"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="5"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="6"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="-"/>
                        </div>
                        <div>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="1"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="2"/>
                            <input onClick={(e)=>{setValue(value + e.target.value)}} type="button" value="3"/>
                            <input onClick={(e)=>{setValue(eval(value))}} type="button" value="="/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Calculator