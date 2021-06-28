import { FC } from 'react';
import React from 'react';
import { useState } from 'react';

interface Props {
	className: string;
}

const UserInput: FC<Props> = ({ className }) => {
	return <input type='file' className={'user-input ' + className} />;
};

export default UserInput;
