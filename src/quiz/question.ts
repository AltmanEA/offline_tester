import { permutation } from "./shuffle"

export class QuestionParsed {
    constructor(
        public question: string,
        public right: string[],
        public wrong: string[]) { }
}

class Answer {
    constructor(
        public text: string,
        public isRight: boolean
    ) { }
}

export class QuestionView {
    constructor(
        public number: number,
        public text: string,
        public answers: Answer[]
    ) { }
}

export function parsedToView(parsed: QuestionParsed, variant: number, number: number): QuestionView {
    const unsorted_answers: Answer[] = []
    parsed.right.map((p) => {
        unsorted_answers.push(new Answer(p, true))
    })
    parsed.wrong.map((p) => {
        unsorted_answers.push(new Answer(p, false))
    })
    const size = unsorted_answers.length
    const sorted_answers = new Array<Answer>(size)
    const answers_permutation = permutation(size, variant)
    for (let i = 0; i < size; i++)
        sorted_answers[i] = unsorted_answers[answers_permutation[i]]
    return new QuestionView(number, parsed.question, sorted_answers)
}

export class QuestParam {
    constructor(
        public questions: QuestionParsed[],
        public variant: number,
        public time_sec: number = 30
    ) { }
}

export class Quest {
    readonly questions: QuestionView[] = []
    readonly code

    constructor(params: QuestParam) {
        const size = params.questions.length
        const questions_permutation = permutation(size, params.variant)
        for (let i = 0; i < size; i++) {
            this.questions.push(
                parsedToView(
                    params.questions[questions_permutation[i]],
                    params.variant++,
                    i + 1)
            )
        }
        this.code = this.getCodes()
    }

    private getCodes(): number[] {
        return this.questions.map((value: QuestionView) => {
            const ans = value.answers.map((currentValue: Answer) => {
                return (currentValue.isRight ? 1 : 0) as number
            })
            const code = ans.reduce((accumulator: number, currentValue: number, currentIndex: number) => {
                return accumulator + currentValue * Math.pow(2, currentIndex)
            }, 0)
            return code
        })
    }


    rightAnswer(): string[] {
        return this.questions.map((qq, i) => {
            let result = ("0" + i.toString()).slice(0, 2)
            qq.answers.map((q, i) => {
                if (q.isRight)
                    result += (i + 1).toString()
            })
            return result
        })
    }


}
