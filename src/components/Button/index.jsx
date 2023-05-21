import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => {
	return (
		<input
			className="calculator__calc-btn"
			type="button"
			value={value}
			onClick={onClick}
		/>
	);
};

Button.propTypes = {
	value: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
