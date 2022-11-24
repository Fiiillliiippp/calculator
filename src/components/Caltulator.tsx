import { useEffect, useState } from 'react';

const Calculator = () => {
  const [calcNumber, setcalcNumber] = useState<string>();
  const [secondCalcNumber, setsecondCalcNumber] = useState<string>();
  const [operator, setOperator] = useState<string>('');
  
  const handlecalcNumberClick = (idValue: any) => {
    // console.log(Number(idValue.target.id));
    if(calcNumber?.length !== 0 || calcNumber === undefined) {
      setcalcNumber(idValue.target.id);
      console.log(calcNumber);
    }
    else {
      setsecondCalcNumber(idValue.target.id);
      console.log(secondCalcNumber);
    }
  };
  

  const handleOperatorClick = (idOperator: any) => {
    switch (idOperator.target.id) {
      case 'plus':
        setOperator('+');
        break;
      case 'minus':
        setOperator('-');
        break;
      case 'divide':
        setOperator('/');
        break;
      case 'times':
        setOperator('*');
        break;
      case 'dot':
        setOperator('.');
        break;
      case 'equals':
        setOperator('=');
        break;
    }
  };
  // useEffect(() => {
  //   if(calcNumber?.length !== 0 && secondCalcNumber?.length !== 0) {
  //     console.log( Number(calcNumber) + operator + Number(secondCalcNumber));
  //   }
  //   console.log(typeof(operator));
    
    
  //   // console.log(Number(calcNumber) + operator + Number(secondCalcNumber));
  // }, [calcNumber, operator, secondCalcNumber]);

  return (
    <div style={{ border: '1px solid black' }} className='calculatodBody'>
      <div className='equals'>{calcNumber}</div>
      <div>
        <table>
          <tbody>
            <tr>
              <td
                id='x2'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                x2
              </td>
              <td
                id='C'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                C
              </td>
              <td
                id='divide'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                ÷
              </td>
              <td
                id='DLT'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                DLT
              </td>
            </tr>
            <tr>
              <td id='7' onClick={idValue => handlecalcNumberClick(idValue)}>
                7
              </td>
              <td id='8' onClick={idValue => handlecalcNumberClick(idValue)}>
                8
              </td>
              <td id='9' onClick={idValue => handlecalcNumberClick(idValue)}>
                9
              </td>
              <td
                id='times'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                *
              </td>
            </tr>
            <tr>
              <td id='4' onClick={idValue => handlecalcNumberClick(idValue)}>
                4
              </td>
              <td id='5' onClick={idValue => handlecalcNumberClick(idValue)}>
                5
              </td>
              <td id='6' onClick={idValue => handlecalcNumberClick(idValue)}>
                6
              </td>
              <td
                id='minus'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                -
              </td>
            </tr>
            <tr>
              <td id='1' onClick={idValue => handlecalcNumberClick(idValue)}>
                1
              </td>
              <td id='2' onClick={idValue => handlecalcNumberClick(idValue)}>
                2
              </td>
              <td id='3' onClick={idValue => handlecalcNumberClick(idValue)}>
                3
              </td>
              <td
                id='plus'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                +
              </td>
            </tr>
            <tr>
              <td
                id='plusOrMinus'
                onClick={idValue => handlecalcNumberClick(idValue)}
              >
                +/-
              </td>
              <td id='0' onClick={idValue => handlecalcNumberClick(idValue)}>
                0
              </td>
              <td
                id='dot'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                .
              </td>
              <td
                id='equals'
                onClick={idOperator => handleOperatorClick(idOperator)}
              >
                =
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Calculator;
