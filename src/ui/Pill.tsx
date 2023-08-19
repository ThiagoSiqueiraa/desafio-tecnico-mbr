import React from "react";
import "./Pill.css";

function Pill({text, isQuestion, onClick, children, style}: {text?: string, isQuestion?: boolean, onClick?: any, children?: React.ReactNode, style?: any}) {

    return (
        <li onClick={onClick} style={
            {
                ...style,
            }
        } className={`pill-container ${isQuestion ? 'question' : ''}`}>
            {children}
        </li>
    )
}

export default Pill;