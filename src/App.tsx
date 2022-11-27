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
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.operation === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      if (payload.operation === '.') {
        return {
          ...state,
          operation: null,
          previousOperand: null,
          currentOperand: `${state.currentOperand || ''}${payload.operation}`,
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTION.CLEAR:
      return {
        ...state,
        operation: null,
        previousOperand: null,
        currentOperand: 0,
      };
    case ACTION.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          currentOperand: null,
          previousOperand: state.currentOperand,
        };
      }
      return {
        ...state,
        currentOperand: null,
        previousOperand: evaluate(state),
        operation: payload.operation,
      };
    case ACTION.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        operation: null,
        overwrite: true,
        previousOperand: null,
        currentOperand: evaluate(state),
      };
      case ACTION.DELETE_DIGIT:
        if(state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currentOperand: null
          }
        }
        if(state.currentOperand == null) {
          return state
        }
        if(state.currentOperand.length === 1) {
          return {
            ...state,
            currentOperand: null
          }
        }
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1)
        }
  }
}

function evaluate({ currentOperand, previousOperand, operation }: any) {
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(previous) || isNaN(current)) {
    return '';
  }
  let computation = 0;
  switch (operation) {
    case '+':
      computation = previous + current;
      break;
    case '-':
      computation = previous - current;
      break;
    case '÷':
      computation = previous / current;
      break;
    case '*':
      computation = previous * current;
      break;
  }
  return computation;
  
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
          <div className='btnC' onClick={() => dispatch({ type: ACTION.CLEAR })}>
            C
          </div>
          <OperationBtn dispatch={dispatch} operation='÷' />
          <div className='btn' onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })} >DEL</div>
          <CalcButton dispatch={dispatch} digit='1' />
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
          <CalcButton dispatch={dispatch} digit='.' />
          <CalcButton dispatch={dispatch} digit='0' />
          <div
            className='btnC'
            onClick={() => dispatch({ type: ACTION.EVALUATE })}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
