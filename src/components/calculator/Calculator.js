import React, { useState } from 'react';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [operand, setOperand] = useState(null);

    function handleNumberClick(event) {
        const value = event.target.innerText;
        setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }

    function handleOperatorClick(event) {
        const value = event.target.innerText;
        setOperator(value);
        setOperand(displayValue);
        setDisplayValue('0');
    }

    function handleClearClick() {
        setDisplayValue('0');
        setOperator(null);
        setOperand(null);
    }

    function handleEqualClick() {
        if (operator && operand) {
            const current = parseFloat(displayValue);
            const previous = parseFloat(operand);
            let result;

            switch (operator) {
                case '+':
                    result = previous + current;
                    break;
                case '-':
                    result = previous - current;
                    break;
                case '*':
                    result = previous * current;
                    break;
                case '/':
                    result = previous / current;
                    break;
                default:
                    break;
            }
            setDisplayValue(result.toString());
            setOperator(null);
            setOperand(null);
        }
    }

    return (
        <div>
            <div className="calculator-display">{displayValue}</div>
            <div className="calculator-keypad">
                <div className="input-keys">
                    <div className="function-keys">
                        <button className="calculator-key key-clear" onClick={handleClearClick}>AC</button>
                        <button className="calculator-key key-sign">±</button>
                        <button className="calculator-key key-percent">%</button>
                    </div>
                    <div className="digit-keys">
                        <button className="calculator-key key-0" onClick={handleNumberClick}>0</button>
                        <button className="calculator-key key-dot">.</button>
                        <button className="calculator-key key-1" onClick={handleNumberClick}>1</button>
                        <button className="calculator-key key-2" onClick={handleNumberClick}>2</button>
                        <button className="calculator-key key-3" onClick={handleNumberClick}>3</button>
                        <button className="calculator-key key-4" onClick={handleNumberClick}>4</button>
                        <button className="calculator-key key-5" onClick={handleNumberClick}>5</button>
                        <button className="calculator-key key-6" onClick={handleNumberClick}>6</button>
                        <button className="calculator-key key-7" onClick={handleNumberClick}>7</button>
                        <button className="calculator-key key-8" onClick={handleNumberClick}>8</button>
                        <button className="calculator-key key-9" onClick={handleNumberClick}>9</button>
                    </div>
                </div>
                <div className="operator-keys">
                    <button className="calculator-key key-divide" onClick={handleOperatorClick}>/</button>
                    <button className="calculator-key key-multiply" onClick={handleOperatorClick}>*</button>
                    <button className="calculator-key key-subtract" onClick={handleOperatorClick}>-</button>
                    <button className="calculator-key key-add" onClick={handleOperatorClick}>+</button>
                    <button className="calculator-key key-equals" onClick={handleEqualClick}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
