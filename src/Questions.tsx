import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";
import Pill from "./ui/Pill";
import Wrapper from "./ui/Wrapper";
import { shuffle } from "./utils/shuffle";
function Questions() {
    const { isLoading, error, sendRequest } = useHttp()
    const [data, setData] = useState<any>(null)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<{ correctAnswers: number, wrongAnswers: number }>(
        {
            correctAnswers: 0,
            wrongAnswers: 0
        }
    )
    const [isFinished, setIsFinished] = useState<boolean>(false)

    const onTryAgain = () => {
        setIsFinished(false)
        setCurrentQuestion(0)
        setScore({
            correctAnswers: 0,
            wrongAnswers: 0
        })
    }


    const onAnswerClick = (answer: string) => {
        console.log(data[currentQuestion].resposta_correta)
        if (answer === data[currentQuestion].resposta_correta) {

            setScore((prev) => ({
                correctAnswers: prev.correctAnswers + 1,
                wrongAnswers: prev.wrongAnswers
            }))

        } else {
            setScore((prev) => ({
                correctAnswers: prev.correctAnswers,
                wrongAnswers: prev.wrongAnswers + 1
            }))
        }
        if (currentQuestion != data.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        } else {
            setCurrentQuestion(0)
            setIsFinished(true)
        }
    }
    interface Item {
        id: number,
        pergunta: string,
        resposta_correta: string,
        resposta_errada1: string,
        resposta_errada2: string,
        status: number
    }

    const handleData = async (res: any) => {
        const response: any = []
        const { data } = res.data
        data.map((item: Item) => {
            response.push({
                id: item.id,
                pergunta: item.pergunta,
                respostas: shuffle([
                    item.resposta_correta,
                    item.resposta_errada1,
                    item.resposta_errada2
                ]),
                resposta_correta: item.resposta_correta,
            })
        }
        )
        setData(shuffle(response))
    }

    useEffect(() => {
        sendRequest({ url: `https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list` }, handleData)
    }, [])

    return (
        <React.Fragment>
            {/* topbar */}
            <header className="header">
                <div className="header__container">
                    <div className="header__avatar">
                    </div>
                    <div className="header__username">
                        <h1>Thiago</h1>
                    </div>
                </div>
            </header>
            <Wrapper width='972px' height='505px' padding='4.3%'>
                {
                    isLoading && <p>Carregando...</p>
                }
                {
                    !isFinished ? (<ul>
                        <Pill isQuestion>{data && <span>{data[currentQuestion].pergunta}</span>}</Pill>
                        {data && data[currentQuestion].respostas.map((item: any) => {
                            return <Pill onClick={() => onAnswerClick(item)} key={item} text={item}><span>{item}</span></Pill>
                        })}
                    </ul>) :

                        (<div>
                            <h1>Pontuação</h1>
                            <Pill><p>Respostas corretas: {score.correctAnswers}</p></Pill>
                            <Pill><p>Respostas erradas: {score.wrongAnswers}</p></Pill>
                            <Pill><p>Porcentagem de acerto: {
                                (score.correctAnswers / (score.correctAnswers + score.wrongAnswers)) * 100
                            }%</p></Pill>
                            <button onClick={onTryAgain}>Tentar novamente</button>
                        </div>)
                }


            </Wrapper>
        </React.Fragment>
    )
}

export default Questions;