import { Dispatch, SetStateAction } from 'react';

type Props = {
  value: string | number;
  calc: { sign: string; num: number; res: number };
  setCalc: Dispatch<SetStateAction<{ sign: string; num: number; res: number }>>;
};
const CalcButton = ({ value, calc, setCalc }: Props) => {
  const numClickHandler = (clickedValue: any) => {
    const value = clickedValue;
    console.log(value);
    
    if (calc.num.toLocaleString().length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (clickedValue: any) => {
    const value = clickedValue;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (clickedValue: any) => {
    const value = clickedValue;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const mathValue = (a: any, b: any, sign: any) =>
        sign === '+'
          ? a + b
          : sign === '-'
          ? a - b
          : sign === '*'
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        sign: '',
        num: 0,
        res:
          calc.num === 0 && calc.sign === '/'
            ? "Can't divide with 0"
            : mathValue(Number(calc.res), Number(calc.num), calc.sign),
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    });
  };

  const percentClickHandler = () => {
    let percNum = calc.num ? calc.num : 0;
    let percRes = calc.res ? calc.res : 0;

    setCalc({
      ...calc,
      num: (percNum /= Math.pow(100, 1)),
      res: (percRes /= Math.pow(100, 1)),
      sign: '',
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    });
  };

  const handleBtnClick = () => {
    value === 'C'
      ? resetClickHandler()
      : value === '+/-'
      ? invertClickHandler()
      : value === '%'
      ? percentClickHandler()
      : value === '='
      ? equalsClickHandler()
      : value === '/' || value === 'X' || value === '-' || value === '+'
      ? signClickHandler(value)
      : value === '.'
      ? commaClickHandler(value)
      : numClickHandler(value);
  };

  return (
    <div className='btn' onClick={handleBtnClick}>
      {value}
    </div>
  );
};
export default CalcButton;
