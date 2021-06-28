import { FC } from 'react';
import React from 'react';
import { useState } from 'react';

interface Props {
	className: string;
	edit: boolean;
	initialValue: string;
}

const UserInput: FC<Props> = ({ className, edit, initialValue }) => {
	const [value, setValue] = useState(initialValue);

	return edit ? (
		<input
			className={'user-input ' + className}
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
		/>
	) : (
		<p className={'mb-0 ' + className}>{value}</p>
	);
};

export default UserInput;
