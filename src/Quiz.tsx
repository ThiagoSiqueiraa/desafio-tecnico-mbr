import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Result from "./components/Result";
import UserContext from "./context/UserContext/UserContext";
import Header from "./Header";
import useHttp from "./hooks/use-http";
import Pill from "./ui/Pill";
import Wrapper from "./ui/Wrapper";
import { shuffle } from "./utils/shuffle";
function Quiz() {

    const user = useContext(UserContext)

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
            {isLoading && <p>Carregando...</p>}
            {user.name === '' && <Navigate to='/' />}
            <Header />

            {
                !isFinished ? (
                    <Wrapper width='60%' padding='3.3%'>

                        <ul>
                            <Pill isQuestion>{data && <span>{data[currentQuestion].pergunta}</span>}</Pill>
                            {data && data[currentQuestion].respostas.map((item: any) => {
                                return <Pill onClick={() => onAnswerClick(item)} key={item} text={item}><span>{item}</span></Pill>
                            })}
                        </ul></Wrapper>) :

                    (<Result score={score} onTryAgain={onTryAgain} />)
            }


        </React.Fragment>
    )
}

export default Quiz;