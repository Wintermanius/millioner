import { Help, helpModel } from '../components/Help';
import { useUnit } from 'effector-react';
import { Progress } from '../components/Progress';
import { GameContainer } from '../components/GameContainer';



function App() {
  const isUsedHalf = useUnit(helpModel.$isUsedHalf)

  console.log(isUsedHalf)

  return (
    <div className="App">
      <Help />
      <Progress />
      <GameContainer />
    </div>
  );
}

export default App;
