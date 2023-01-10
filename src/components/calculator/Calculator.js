import React, { useState } from 'react';

function Calculator() {
    const [value, setValue] = useState('');

    function handleClick(e) {
        const buttonValue = e.target.innerText;
        if (buttonValue === 'C') {
            setValue('');
        } else if (buttonValue === '=') {
            const result = eval(value);
            setValue(result);
        } else {
            setValue(value + buttonValue);
        }
    }

    return (
        <div>
            <input type="text" value={value} />
            <br />
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>+</button>
            <br />
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>-</button>
            <br />
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>*</button>
            <br />
            <button onClick={handleClick}>.</button>
            <button onClick={handleClick}>0</button>
            <button onClick={handleClick}>C</button>
            <button onClick={handleClick}>/</button>
            <br />
            <button onClick={handleClick}>=</button>
        </div>
    );
}

export default Calculator;
