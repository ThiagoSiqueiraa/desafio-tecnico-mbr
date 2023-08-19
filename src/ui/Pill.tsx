import React from "react";
import "./Pill.css";

function Pill({text, isQuestion}: {text: string, isQuestion?: boolean}) {

    return (
        <div  className={`pill-container ${isQuestion ? 'question' : ''}`}>
            <span>{text}</span>
        </div>
    )
}

export default Pill;