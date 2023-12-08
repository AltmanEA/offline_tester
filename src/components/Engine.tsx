import { useState } from "react"
import Countdown from "./Countdown"
import { Question } from "./Question"
import { Quest, QuestParam } from "../quiz/question"

type EngineProps = {
    quest: Quest,
    params: QuestParam
}

export default function Engine({quest, params}: EngineProps){
    console.log(quest.code)
    const [index, setIndex] = useState(0)
    const size = quest.questions.length
    if (index === size) {
        return <h1>Тест окончен</h1>
    }
    else
        return (
            <div className="engine">
                <Countdown key={index} start={params.time_sec} end={()=>setIndex(index+1)} />
                <Question question={quest.questions[index]} />                
            </div>
        )
}