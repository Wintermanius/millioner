import { Help, helpModel } from '../components/Help';
import { useUnit } from 'effector-react';
import { Progress } from '../components/Progress';
import { GameContainer } from '../components/GameContainer';
import styled from 'styled-components';
import { $questions } from '../store/store';
import { fetchQuestionsFx } from '../store/api';
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
  const isUsedHalf = useUnit(helpModel.$isUsedHalf)
  
  useEffect(() => {
    fetchQuestionsFx()
  }, [])

  const questions = useUnit($questions)

  console.log(questions)

  return (
    <GameScreen>
      <HelpStyled />
      <ProgressSyeled />
      <GameContainerStyled />
    </GameScreen>
  );
}

export default App;
