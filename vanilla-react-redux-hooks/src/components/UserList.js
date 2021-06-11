import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context';
import { User } from './User';
 

export const UserList = () => {
    const { users } = useContext(AppContext);
	return (
		<ul>
		<li>
		{users.map(user => <User key={user.id} user={user} />)}
		</li>
			
		</ul>
	);
}
