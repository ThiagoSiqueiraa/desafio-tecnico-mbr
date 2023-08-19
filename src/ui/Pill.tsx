import React from "react";
import "./Pill.css";

function Pill({text, isQuestion, onClick, children}: {text?: string, isQuestion?: boolean, onClick?: any, children?: React.ReactNode}) {

    return (
        <li onClick={onClick} className={`pill-container ${isQuestion ? 'question' : ''}`}>
            {children}
        </li>
    )
}

export default Pill;