import React from "react";
import Pill from "./ui/Pill";
import Wrapper from "./ui/Wrapper";
function Questions() {

    return (
        <Wrapper width='972px' height='505px' padding='4.3%'>
            <Pill isQuestion text="pergunta"/>
            <Pill text="resposta 1"/>
            <Pill text="resposta 2"/>
            <Pill text="resposta 3"/>
        </Wrapper>
    )
}

export default Questions;