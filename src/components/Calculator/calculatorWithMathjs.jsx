// // I use this before code refactor 
// import React, { useState } from 'react';
// import { evaluate } from 'mathjs';

// import Button from '../Button';
// import InputField from '../InputField';
// import OperatorButton from '../OperatorButton';

// import './Calculator.scss';

// const Calculator = () => {
// 	const [result, setResult] = useState('');

// 	const handleClick = (event) => {
// 		setResult((prevResult) => `${prevResult}${event.target.value}`);
// 	};

// 	const handleClearDisplay = () => {
// 		setResult('');
// 		console.log('clear display');
// 	};

// 	const handleCalculate = () => {
// 		try {
// 			const calculatedResult = evaluate(result);
// 			if (isNaN(calculatedResult)) {
// 				setResult('Invalid expression');
// 			} else {
// 				setResult(calculatedResult.toString());
// 				console.log('Calculating complete');
// 			}
// 		} catch (error) {
// 			setResult('Error occurred');
// 			console.log('Error occurred during calculation:', error);
// 		}
// 	};

// 	const numberButtons = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
// 	const operatorButtons = ['+', '-', '*', '/', '%'];

// 	return (
// 		<div className="calculator">
// 			<InputField value={result} />
// 			<div className="calculator__btns">
// 				{numberButtons.map((value) => (
// 					<Button key={value} value={value} onClick={handleClick} />
// 				))}
// 				{operatorButtons.map((value) => (
// 					<OperatorButton key={value} value={value} onClick={handleClick} />
// 				))}
// 			</div>
// 			<Button value="delete" onClick={handleClearDisplay} />
// 			<Button value="=" onClick={handleCalculate} />
// 		</div>
// 	);
// };

// export default Calculator;
