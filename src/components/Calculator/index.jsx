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

	const handleCalculate = () => {
		try {
			let calculatedResult;
			if (result.includes('+')) {
				const [a, b] = result.split('+');
				calculatedResult = add(a, b);
			} else if (result.includes('-')) {
				const [a, b] = result.split('-');
				calculatedResult = subtract(a, b);
			} else if (result.includes('*')) {
				const [a, b] = result.split('*');
				calculatedResult = multiply(a, b);
			} else if (result.includes('/')) {
				const [a, b] = result.split('/');
				calculatedResult = divide(a, b);
			}

			if (isNaN(calculatedResult)) {
				setError(true); // Установка состояния ошибки при некорректном выражении
				setResult('некоррекное выражение');
			} else {
				setError(false); // Сброс состояния ошибки при успешном вычислении
				setResult(calculatedResult.toString());
				console.log('вычисление прошло успешно');
			}
		} catch (error) {
			setError(true); // Установка состояния ошибки при возникновении ошибки в вычислениях
			setResult('Error occurred');
			console.log('Ошибка в процессе вычисления', error);
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
