import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ onClick }) => {
	return <button onClick={onClick}>Delete</button>;
};

DeleteButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
