import { dataContext } from './contexts/DataContext';
import ScreenData from './components/ScreenData/index';
import ButtonsList from './components/ButtonsList/index';
import './App.css';
import { useState } from 'react';

function App() {
  const [arith, setArith] = useState('')
  const [result, setResult] = useState(0)

  return (
    <div className="App">
      <dataContext.Provider value={{result, setResult, arith, setArith}}>
        <ScreenData data={arith} />
        <ScreenData data={result} type='result'/>
        <ButtonsList />
      </dataContext.Provider>
    </div>
  );
}

export default App;
