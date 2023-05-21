import React from 'react';
import PropTypes from 'prop-types';

const OperatorButton = ({ value, onClick }) => {
	return (
		<input
			className="calculator__calc-btn operator"
			type="button"
			value={value}
			onClick={onClick}
		/>
	);
};

OperatorButton.propTypes = {
	value: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default OperatorButton;
