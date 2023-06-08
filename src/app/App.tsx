import { Help } from '../components/Help';
import { Progress } from '../components/Progress';
import { GameContainer } from '../components/GameContainer';
import styled from 'styled-components';
import { useUnit } from 'effector-react';
import { $questionNumber, $questionsData, events } from './model';
import { useEffect } from 'react';

const GameScreen = styled.div`
  display: flex;
  justify-content: center;
`
const ProgressSyeled = styled(Progress)`
  position: absolute;
  top: 20px;
  right: 20px;
`
const HelpStyled = styled(Help)`
  position: absolute;
  top: 20px;
  left: 20px;
`
const GameContainerStyled = styled(GameContainer)`
  position: absolute;
  bottom: 20px;
`

function App() {
  
  const mountedChanged = useUnit(events.mountedChanged)
  const questionNumber = useUnit($questionNumber)
  const questionsData = useUnit($questionsData)

  const questions = questionsData.map((item) => item.question)
  const answers = questionsData.map((item) => [item.correct_answer, ...item.incorrect_answers])
  const correctAnswer = questionsData.length ? questionsData[questionNumber].correct_answer : null

  useEffect(() => {
    mountedChanged(true)
  })

  return (
    <GameScreen>
      <HelpStyled correctAnswer={correctAnswer} />
      <ProgressSyeled />
      <GameContainerStyled questionNumber={questionNumber} questions={questions} correctAnswer={correctAnswer} answers={answers} />
    </GameScreen>
  );
}

export default App;
