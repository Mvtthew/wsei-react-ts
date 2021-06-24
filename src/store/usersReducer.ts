export interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
	company: {
		name: string;
	};
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
}

const initState: {
	users: User[];
	principal: User;
} = {
	users: [],
	principal: {
		address: {
			city: '',
			street: '',
			suite: '',
			zipcode: '',
		},
		company: {
			name: '',
		},
		email: '',
		id: 0,
		name: '',
		phone: '',
	},
};

type GET_USERS = 'GET_USERS';
type UserStoreActions = GET_USERS;

export const getUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();
	return {
		type: 'GET_USERS',
		payload: users,
	};
};

const usersReducer = (
	state: {
		users: User[];
		principal: User;
	} = initState,
	action: {
		type: UserStoreActions;
		payload: User[];
	},
): {
	users: User[];
	principal: User;
} => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				principal: action.payload[0],
				users: action.payload,
			};
		default:
			return state;
	}
};

export default usersReducer;
