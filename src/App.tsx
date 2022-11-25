import { useState } from 'react';
import './App.css';
import ButtonBox from './components/ButtonBox';
import Calculator from './components/Caltulator';
import Container from './components/Container';
import Screen from './components/Screen';

function App() {
  const btnsValue = [
    ['C', 'x2', '%', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, '.', '='],
  ];

  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })
  return (
    <div className='App'>
          <div className='CalculatorBody'>
              <Screen value={calc.num ? calc.num : calc.res} />
              <ButtonBox btnsValue={btnsValue} calc={calc} setCalc={setCalc} />
          </div>
    </div>
  );
}

export default App;
