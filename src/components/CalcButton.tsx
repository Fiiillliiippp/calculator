import { Dispatch } from 'react';
import { ACTION } from '../App';

type Props = {
  dispatch: Dispatch<{ type: any; payload: any; }>;
  digit: any
};
const CalcButton = ({ dispatch, digit }: Props) => {
  return (
    <div
      className='btn'
      onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </div>
  );
};
export default CalcButton;
