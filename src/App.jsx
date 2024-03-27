import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import CounterConfig from './Components/Counter/CounterConfig.jsx';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);
 const handelSetCount = (count)=>{
  setChosenCount(count)
 }

  return (
    <>
      <Header />
      <main>
      <CounterConfig onSet={handelSetCount}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
