import React, { useState } from 'react';

import { add, subtract, multiply, divide } from './mathOperations';
// import * as mathOperations from './mathOperations';

import InputField from '../InputField';
import Button from '../Button';
import OperatorButton from '../OperatorButton';
import DeleteButton from '../DeleteButton';

import './Calculator.scss';

const Calculator = () => {
	const [result, setResult] = useState('');
	const [error, setError] = useState(false);

	const handleClick = (event) => {
		setResult((prevResult) => `${prevResult}${event.target.value}`);
	};

	const handleClearDisplay = () => {
		setResult('');
		console.log('clear display');
	};

	const handleDelete = () => {
		setResult(result.slice(0, -1));
	};

	const performCalculation = (a, b, operator) => {
		switch (operator) {
			case '+':
				return add(a, b);
			case '-':
				return subtract(a, b);
			case '*':
				return multiply(a, b);
			case '/':
				return divide(a, b);
			default:
				throw new Error('Invalid operator');
		}
	};

	const handleCalculate = () => {
		try {
			const operators = ['+', '-', '*', '/'];
			let calculatedResult;

			for (const operator of operators) {
				if (result.includes(operator)) {
					const [a, b] = result.split(operator);
					calculatedResult = performCalculation(a, b, operator);
					break;
				}
			}

			if (calculatedResult === undefined) {
				throw new Error('Invalid expression');
			}

			if (isNaN(calculatedResult)) {
				setError(true);
				setResult('Invalid expression');
			} else {
				setError(false);
				setResult(calculatedResult.toString());
				console.log('Calculation complete');
			}
		} catch (error) {
			setError(true);
			setResult('Error occurred');
			console.log('Error occurred during calculation:', error);
		}
	};

	const numberButtons = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
	const operatorButtons = ['+', '-', '*', '/', '%'];

	return (
		<div className="calculator">
			<InputField value={result} error={error} /> {/* Передача состояния ошибки в компонент InputField */}
			<div className="calculator__btns">
				{numberButtons.map((value) => (
					<Button key={value} value={value} onClick={handleClick} />
				))}
				{operatorButtons.map((value) => (
					<OperatorButton key={value} value={value} onClick={handleClick} />
				))}
			</div>
			<Button value="clear" onClick={handleClearDisplay} />
			<Button value="=" onClick={handleCalculate} />
			<DeleteButton onClick={handleDelete} />
		</div>
	);
};

export default Calculator;
