import React from 'react';
import { Help, helpModel } from '../components/Help';
import { useUnit } from 'effector-react';


function App() {
  const isUsedHalf = useUnit(helpModel.$isUsedHalf)

  console.log(isUsedHalf)

  return (
    <div className="App">
      <Help />
    </div>
  );
}

export default App;
