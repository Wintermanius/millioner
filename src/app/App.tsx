import { Help, helpModel } from '../components/Help';
import { useUnit } from 'effector-react';
import { Progress } from '../components/Progress';
import { GameContainer } from '../components/GameContainer';
import styled from 'styled-components';

const GameScreen = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  const isUsedHalf = useUnit(helpModel.$isUsedHalf)

  console.log(isUsedHalf)

  return (
    <GameScreen>
      <Help />
      <Progress />
      <GameContainer />
    </GameScreen>
  );
}

export default App;
