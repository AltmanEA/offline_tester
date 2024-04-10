import { parsedToView, Quest, QuestionParsed, QuestParam } from "./question"

const testQuestions: QuestionParsed[] = [
    new QuestionParsed("1 questions", ["1 1 r", "1 2 r"], ["1 1 w", "1 2 w"]),
    new QuestionParsed("2 questions", ["2 1 r"], ["2 1 w", "2 2 w", "2 3 w"])
]

test("parsedToView", ()=>{
    const parsedQuestions0 = parsedToView(testQuestions[0], 0, 0)
    // const parsedQuestions1 = parsedToView(testQuestions[0], 1, 1)
    expect(parsedQuestions0.answers.length).toBe(4)
})

test("Quest constructor", ()=>{
    const quest1 = new Quest(new QuestParam(testQuestions, 0))
    // const quest2 = new Quest(new QuestParam(testQuestions, 1))
    expect(quest1.questions.length).toBe(testQuestions.length)
})

test("RightAnswers", ()=>{
    const quest = new Quest(new QuestParam(testQuestions, 0))
    const rightAnswers = quest.rightAnswer()
    expect(rightAnswers.length).toBe(testQuestions.length)
})

test("Codes", ()=>{
    const quest = new Quest(new QuestParam(testQuestions, 0))    
    expect(quest.code).toEqual([8, 9])
})