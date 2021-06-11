import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context';

export const AddUser = () => {
    const { dispatchUserEvent } = useContext(AppContext);
	const { updates } = useContext(AppContext);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState( '');
 
	//update default name&email vaule only we click edit button 
	useEffect(() => {
			setName(updates.name)
			setEmail(updates.email)
		
	},[updates])
 
	
	const handleAddUser = () => {
		let user = {}
		let tempUserId =  Math.floor(Math.random() * 999) + 1 

	 if (updates.id) {
		user =  { id: '' + updates.id , name, email };
		dispatchUserEvent('UPDATE_USER', { newUser: user });
	 }  
	 else {

		user =  { id: ''+ tempUserId , name, email };
		dispatchUserEvent('ADD_USER', { newUser: user });
	 } 
		
        setName (''),
        setEmail ('')
	};

	return (
		<div>
			<h3>Add New User</h3>
			<input
            type="text" 
            value={name || ''} 
			required 
            onChange={e => {setName(e.target.value)}}
            placeholder="name" />
			<br />

			<input 
            type="text" 
            value={email || ''} 
			required 
            onChange={e => {setEmail(e.target.value)}} 
            placeholder="email"/>
			<br />
			<button onClick={handleAddUser}>Add User</button>
		</div>
	);
    }
