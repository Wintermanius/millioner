import { Help } from '../components/Help';
import { Progress } from '../components/Progress';
import { GameContainer } from '../components/GameContainer';
import styled from 'styled-components';

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
  
  return (
    <GameScreen>
      <HelpStyled />
      <ProgressSyeled />
      <GameContainerStyled />
    </GameScreen>
  );
}

export default App;
