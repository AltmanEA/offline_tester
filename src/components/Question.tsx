import { QuestionView } from "../quiz/question"


type QuestionProps = {
    question: QuestionView
}

export function Question({ question }: QuestionProps) {
    const answers = question.answers.map((ans, index) => {
        return <li key={`ans${index}`} dangerouslySetInnerHTML={{ __html: ans.text }}></li>
    })
    const title  = { __html: `${question.number} . ${question.text}`}
    return (
        <div>
            <h3 dangerouslySetInnerHTML={title}></h3>
            <ol>{answers}</ol>
        </div>
    )
}