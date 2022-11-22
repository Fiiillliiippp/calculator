const Calculator = () => {
  
  return (
    <div style={{ border: '1px solid black' }} className="calculatodBody">
      <div className="equals" >Equals</div>
      <div>
        <table>
          <div>
            <td id="x2" >x2</td>
            <td id="C">C</td>
            <td id="divide">÷</td>
            <td id="DLT">DLT</td>
          </div>
          <div>
            <td id="7">7</td>
            <td id="8">8</td>
            <td id="9">9</td>
            <td id="times">*</td>
          </div>
          <div>
            <td id="4">4</td>
            <td id="5">5</td>
            <td id="6">6</td>
            <td id="minus">-</td>
          </div>
          <div>
            <td id="1">1</td>
            <td id="2">2</td>
            <td id="3">3</td>
            <td id="plus">+</td>
          </div>
          <div>
            <td id="plusOrMinus">+/-</td>
            <td id="0">0</td>
            <td id="dot">.</td>
            <td id="equals">=</td>
          </div>
          <div>
          </div>
        </table>
      </div>
    </div>
  );
};
export default Calculator;
