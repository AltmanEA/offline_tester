import { useState } from 'react';
import Engine from './Engine';
import { Quest, QuestParam } from '../quiz/question';
import Settings from './Settings';

export default function App() {
  const [questParam, setQuestParam] = useState<QuestParam>()
  
  return (
    questParam ?
      <Engine quest={new Quest(questParam)} params={questParam} />:
      <Settings setQuestParam={setQuestParam}/>
  )
}
