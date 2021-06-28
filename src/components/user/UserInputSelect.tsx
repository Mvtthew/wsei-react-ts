import { FC } from 'react';
import React from 'react';
import { useState } from 'react';

interface Props {
	className: string;
	edit: boolean;
	initialValue: string;
	options: string[];
}

const UserInputSelect: FC<Props> = ({ className, edit, initialValue, options }) => {
	const [value, setValue] = useState(initialValue);

	return edit ? (
		<select
			className={'user-input-select ' + className}
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}>
			{options.map((o) => (
				<option value={o}>{o}</option>
			))}
		</select>
	) : (
		<p className={'mb-0 ' + className}>{value}</p>
	);
};

export default UserInputSelect;
