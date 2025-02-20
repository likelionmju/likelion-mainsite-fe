import './Button.css';
import React from 'react';

const Button = ({ type, onClick, children, disabled }) => {
	return (
		<button onClick={onClick} className={`Button Button_${type}`}>
			{children}
		</button>
	);
};

export default Button;
