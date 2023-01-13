import React, { useState } from 'react';
import "./Calculator.css";

const Calculator = () => {
    const [currentNumber, setCurrentNumber] = useState('');
    const [previousNumber, setPreviousNumber] = useState('');
    const [operator, setOperator] = useState('');


    const handleNumberClick = event => {
        setCurrentNumber(currentNumber + event.target.value);
    };

    const handleClear = event => {
        const currentNumber = event.target.innerText;

        if (currentNumber === 'C') {
            setCurrentNumber('');
        } else if (currentNumber === '=') {
            const result = eval(currentNumber);
            setCurrentNumber(result);
        } else {
            setCurrentNumber(currentNumber + event.key);
        }
    }

    const handleOperatorClick = event => {
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperator(event.target.value);
    };

    const handleEqualClick = () => {
        let result = '';
        switch (operator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
            default:
                break;
        }
        setCurrentNumber(result);
        setPreviousNumber('');
        setOperator('');
    };


    const handleKeyPress = event => {
        if (!isNaN(event.key)) {
            setCurrentNumber(currentNumber + event.key);
        } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
            setPreviousNumber(currentNumber);
            setCurrentNumber('');
            setOperator(event.key);
        } else if (event.key === 'Enter') {
            handleEqualClick();
        }
    };



    return (
        <div>
            <input type="text" value={currentNumber} onKeyPress={handleKeyPress} />
            <br />
            <button value="7" onClick={handleNumberClick}>7</button>
            <button value="8" onClick={handleNumberClick}>8</button>
            <button value="9" onClick={handleNumberClick}>9</button>
            <button value="+" onClick={handleOperatorClick}>+</button>
            <br />
            <button value="4" onClick={handleNumberClick}>4</button>
            <button value="5" onClick={handleNumberClick}>5</button>
            <button value="6" onClick={handleNumberClick}>6</button>
            <button value="-" onClick={handleOperatorClick}>-</button>
            <br />
            <button value="1" onClick={handleNumberClick}>1</button>
            <button value="2" onClick={handleNumberClick}>2</button>
            <button value="3" onClick={handleNumberClick}>3</button>
            <button value="*" onClick={handleOperatorClick}>*</button>
            <br />
            <button value="0" onClick={handleNumberClick}>0</button>
            <button value="." onClick={handleNumberClick}>.</button>
            <button onClick={handleEqualClick}>=</button>
            <button value="/" onClick={handleOperatorClick}>/</button>
            <br />
            <button class="clear" onClick={handleClear}>Limpar</button>
        </div>
    );
};

export default Calculator;

