import React from 'react'
import Pill from './ui/Pill'
import Wrapper from './ui/Wrapper'

function Result({ score, onTryAgain }: { score: { correctAnswers: number, wrongAnswers: number }, onTryAgain: () => void }) {
    const scorePercentage = (score.correctAnswers / (score.correctAnswers + score.wrongAnswers)) * 100
    return (
        <Wrapper width="30%" padding='1.1%'><div className='result'>
            <h1>Pontuação</h1>
            <Pill style={{ justifyContent: 'space-evenly' }}><span>Respostas corretas:</span> <span>{score.correctAnswers}</span></Pill>
            <Pill style={{ justifyContent: 'space-evenly' }}><span>Respostas erradas:</span><span>{score.wrongAnswers}</span></Pill>
            <Pill style={{ justifyContent: 'space-evenly' }}><span>Porcentagem de acerto:</span> <span>{scorePercentage}%</span></Pill>
            <button className="btn__tryagain" onClick={onTryAgain}>Tentar novamente</button>
        </div>
        </Wrapper>
    )
}

export default Result