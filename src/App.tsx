import { useReducer } from 'react';
import './App.css';
import CalcButton from './components/CalcButton';
import OperationBtn from './components/OperationBtn';

export const ACTION = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate',
};

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case ACTION.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.operation === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
      case ACTION.CLEAR:
        return {
          currentOperand: "",
          previousOperand: "",
          operation: ""
        }
      case ACTION.CHOOSE_OPERATION:
        if(state.currentOperand === '0' && payload.operand === '÷') 
          return {currentOperand: "ERROR"}
        
        return {
          ...state,
          operation: `${state.operation || ''}${payload.operation}`,
          previousOperand: `${state.currentOperand || ''}` ,
          currentOperand: ""
        }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className='App'>
      <div className='CalculatorBody'>
        <div className='equals'>
          <div className='previousOperand'>
            {previousOperand} {operation}{' '}
          </div>
          <div className='currentOperand'>{currentOperand}</div>
        </div>
        <div className='btnBox'>
          <div className='btn' onClick={() => dispatch({ type: ACTION.CLEAR })} >C</div>
          <OperationBtn dispatch={dispatch} operation='x2' />
          <OperationBtn dispatch={dispatch} operation='÷' />
          <div className='btn' >DEL</div>
          <div></div><CalcButton dispatch={dispatch} digit='1' />
          <CalcButton dispatch={dispatch} digit='2' />
          <CalcButton dispatch={dispatch} digit='3' />
          <OperationBtn dispatch={dispatch} operation='*' />
          <CalcButton dispatch={dispatch} digit='4' />
          <CalcButton dispatch={dispatch} digit='5' />
          <CalcButton dispatch={dispatch} digit='6' />
          <OperationBtn dispatch={dispatch} operation='+' />
          <CalcButton dispatch={dispatch} digit='7' />
          <CalcButton dispatch={dispatch} digit='8' />
          <CalcButton dispatch={dispatch} digit='9' />
          <OperationBtn dispatch={dispatch} operation='-' />
          <OperationBtn dispatch={dispatch} operation='+/-' />
          <CalcButton dispatch={dispatch} digit='0' />
          <OperationBtn dispatch={dispatch} operation='.' />
          <OperationBtn dispatch={dispatch} operation='=' />
        </div>
      </div>
    </div>
  );
}

export default App;
