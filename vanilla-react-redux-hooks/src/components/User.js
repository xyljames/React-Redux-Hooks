import React, { useContext } from 'react'
import { AppContext } from '../context';

export const User = ({user}) => {
    const { dispatchUserEvent } = useContext(AppContext);

	const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id });
	};
	const handleEditUser = () => {
		dispatchUserEvent('EDIT_USER', { userId: user.id });
	};
	return (
		<div className="User">
			<h4>{user.name}</h4>
			<h4>{user.email}</h4>
			<button onClick={handleEditUser}>Edit user</button>
			<button onClick={handleRemoveUser}>Delete user</button>
		</div>
	);
}
