import { type } from "os";
import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";
import Pill from "./ui/Pill";
import Wrapper from "./ui/Wrapper";
import { shuffle } from "./utils/shuffle";
function Questions() {
    const { isLoading, error, sendRequest } = useHttp()
    const [data, setData] = useState<any>(null)
    let count = 0;
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
                ])
            })
        }
        )
        setData(shuffle(response))
    }

    useEffect(() => {
        sendRequest({ url: `https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list` }, handleData)
    }, [])

    console.log(data)
    return (
        <Wrapper width='972px' height='505px' padding='4.3%'>
            {isLoading && <p>Carregando...</p>}
            <Pill isQuestion text={data && data[count].pergunta} />
            {data && data[count].respostas.map((item: any) => {
                return <Pill key={item} text={item} />
            })}
        </Wrapper>
    )
}

export default Questions;