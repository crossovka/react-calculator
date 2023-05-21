import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ value }) => {
	return (
		<input className="calculator__answer" type="text" value={value} readOnly />
	);
};

InputField.propTypes = {
	value: PropTypes.string.isRequired,
};

export default InputField;
