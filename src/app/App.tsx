import { Help } from '../components/Help';
import { Progress } from '../components/Progress';
import { GameContainer } from '../components/GameContainer';
import styled from 'styled-components';
import { useUnit } from 'effector-react';
import { $answers, $gameOver, $questionNumber, $questionsData, $victory, appModel, events } from './model';
import { useEffect } from 'react';
import { shuffle } from 'lodash';

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
const MessageScreen = styled.div`
  position: absolute;
  top: 400px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 300px;
  height: 100px;
  padding: 10px;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  color: white;
  font-size: 40px;
  font-weight: bold;
`

function App() {
  
  const mountedChanged = useUnit(events.mountedChanged)
  const questionNumber = useUnit($questionNumber)
  const questionsData = useUnit($questionsData)

  const questions = questionsData.map((item) => item.question)
  const answers = questionsData.map((item) => [item.correct_answer, ...item.incorrect_answers])
  const correctAnswer = questionsData.length ? questionsData[questionNumber].correct_answer : null

  function getRandomScore(max: number) {
    return Math.floor(Math.random() * max)
  }

  function getScore(a: number)  {
    let result = a - getRandomScore(a)
    return result
  }
  
  function getPeoplesOpinion() {
    let i = 100
    let a = getScore(i)
    i = i - a
    let b = getScore(i)
    i = i - b
    let c = getScore(i)
    i = i - c
    return [a, b, c, i]
  }
  
  console.log(correctAnswer)

  const peoplesOpinion = getPeoplesOpinion()
  const answersWithPercents = answers[questionNumber]?.map((item, index) => [item, peoplesOpinion[index]])
  const answersShuffled = shuffle(answersWithPercents)

  const onChangeAnswers = () => {
  }

  const gameOver = useUnit($gameOver)
  const victory = useUnit($victory)
  const victoryChanged = useUnit(appModel.events.victoryChanged)

  if(questionNumber > 9) {
    victoryChanged(true)
  }

  useEffect(() => {
    mountedChanged(true)
  })
  
  return (
    <GameScreen>
      {victory && <MessageScreen>YOU WIN!!!</MessageScreen>}
      {gameOver && <MessageScreen>GAME OVER</MessageScreen>}
      {!gameOver && !victory && <>
        <HelpStyled correctAnswer={correctAnswer} answers={answersShuffled} questionNumber={questionNumber}/>
        <ProgressSyeled />
        <GameContainerStyled questionNumber={questionNumber} questions={questions} correctAnswer={correctAnswer} answers={answersShuffled} onChangeAnswers={onChangeAnswers} />
      </>}
    </GameScreen>
  )
}

export default App;
