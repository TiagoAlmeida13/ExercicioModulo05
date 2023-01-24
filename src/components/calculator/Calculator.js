import React, { useState } from 'react';
import "./Calculator.css";

import Button from '../utils/assets/button';

const Calculator = () => {
    const [currentNumber, setCurrentNumber] = useState('');
    const [previousNumber, setPreviousNumber] = useState('');
    const [operator, setOperator] = useState('');


    const handleNumberClick = value => {
        setCurrentNumber(currentNumber + value);
    };

    const handleClear = value => {
        const currentNumber = value;

        if (currentNumber === 'C') {
            setCurrentNumber('');
        } else if (currentNumber === '=') {
            const result = eval(currentNumber);
            setCurrentNumber(result);
        } else {
            setCurrentNumber('')
        }
    }

    const handleOperatorClick = value => {
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperator(value);
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
            <Button value="7" onClick={() => handleNumberClick(7)} />
            <Button value="8" onClick={() => handleNumberClick(8)} />
            <Button value="9" onClick={() => handleNumberClick(9)} />
            <Button value="+" onClick={() => handleOperatorClick("+")} />
            <br />
            <Button value="4" onClick={() => handleNumberClick(4)} />
            <Button value="5" onClick={() => handleNumberClick(5)} />
            <Button value="6" onClick={() => handleNumberClick(6)} />
            <Button value="-" onClick={() => handleOperatorClick("-")} />
            <br />
            <Button value="1" onClick={() => handleNumberClick(1)} />
            <Button value="2" onClick={() => handleNumberClick(2)} />
            <Button value="3" onClick={() => handleNumberClick(3)} />
            <Button value="*" onClick={() => handleOperatorClick("*")} />
            <br />
            <Button value="0" onClick={() => handleNumberClick(0)} />
            <Button value="." onClick={() => handleNumberClick(".")} />
            <Button value="=" onClick={() => handleEqualClick("=")} />
            <Button value="/" onClick={() => handleOperatorClick("/")} />
            <br />
            <br />
            <Button value="C" onClick={() => handleClear()} />
        </div>
    );
};

export default Calculator;

