import { ChangeEvent, useState } from "react";
import { parse } from 'yaml';
import { QuestionParsed, QuestParam } from "../quiz/question";

type SettingsProps = {
    setQuestParam: (questParam: QuestParam) => void
}

const MIN_VARIANT = 0
const MAX_VARIANT = 9999

function getRandomInt(min: number = MIN_VARIANT, max: number = MAX_VARIANT): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Settings({ setQuestParam }: SettingsProps) {
    const [questions, setQuestions] = useState<QuestionParsed[]>([])
    const [variant, setVariant] = useState<number>(getRandomInt())
    const [time, setTime] = useState<number>(30)

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            e.target.files[0].text().then((s) => {
                const obj = parse(s) as QuestionParsed[]
                setQuestions(obj)
            })
        }
    };

    const handleVariantChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVariant(Number.parseInt(e.target.value))
    }
    const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(Number.parseInt(e.target.value))
    }
    const handleGo = () => {
        setQuestParam(new QuestParam(questions, variant, time))
    }


    return (
        <div>
            <div>Загружено {questions.length} вопросов.</div>
            <div><input type="file" onChange={handleFileChange} /></div>
            <div>Вариант: <input
                type="number"
                min={MIN_VARIANT}
                max={MAX_VARIANT}
                defaultValue={variant}
                onChange={handleVariantChange}
            /></div>
            <div>Время на вопрос: <input 
                type="number"
                min={0}
                max={1000}
                defaultValue={time}
            /> секунд</div>
            <div><button onClick={handleGo}>Старт!</button></div>
        </div>
    )

}