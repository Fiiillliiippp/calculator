import { Dispatch, SetStateAction } from 'react';
import CalcButton from './CalcButton';

type Props = {
  btnsValue: (string | number)[][];
  calc: {sign: string; num: number; res: number;};
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number; }>>;
};

const ButtonBox = ({ btnsValue, calc, setCalc }: Props) => {
  return (
    <div>
      <div className='btnBox'>
        {btnsValue.flat().map((btn, index) => (
          <CalcButton key={index} value={btn} calc={calc} setCalc={setCalc} />
        ))}
      </div>
    </div>
  );
};
export default ButtonBox;
