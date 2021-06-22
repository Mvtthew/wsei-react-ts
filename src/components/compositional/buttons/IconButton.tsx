import { FC } from 'react';
import React from 'react';

interface Props {
	iconClass: string;
	className?: string;
}

const IconButton: FC<Props> = ({ iconClass, className }) => {
	return (
		<div className={'icon-button ' + className}>
			<i className={`bx bx-${iconClass}`}></i>
		</div>
	);
};

export default IconButton;
