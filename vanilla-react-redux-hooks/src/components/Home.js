import React, { useEffect } from 'react'
import { AddUser } from './AddUser'
import { UserList } from './UserList'
import  { useState } from 'react';
import { AppContext } from '../context';
import { fetchAllUsers } from '../controllers/getUserList';
import { addUser } from '../controllers/addUser';
import { deleteUser } from '../controllers/deleteUser';
import { editUser } from '../controllers/editUser';


export const Home = () => {
    const [ users, setUsers ] = useState([]);
	const [ updates, updateUser] = useState([])

    useEffect(()=>{ fetchAllUsers().then(res=>{setUsers([...res])})},[])
	
	const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_USER':
				console.log(payload)
                addUser(payload).then(res =>{
					console.log([...users],res)
                    return [...users].indexOf(res) === -1 ? setUsers([ ...users,res]) : setUsers([ ...users]);
                })
				return;
			case 'REMOVE_USER':
				deleteUser(payload.userId,users).then(res => { 
					setUsers(res);
				})
				return;
			case 'EDIT_USER':
				console.log('edit here!',payload.newUser)
				editUser(payload,users).then(res =>{
				 updateUser(res)
				})
				return;
			case 'UPDATE_USER':
			   [...users].map(user => {
				  if (user.id === payload.newUser.id) {
					  user.name = payload.newUser.name
					  user.email = payload.newUser.email
					  console.log("found it",user)
				  }
			  })
			  console.log('update here!',[...users])
			  setUsers([...users])
					 
				console.log('update',users)
				return;
			default:
				return;
		}
	};
    return (
        <div >
			<AppContext.Provider value={{updates, users,dispatchUserEvent }}>
				<AddUser />
				<UserList />
			</AppContext.Provider>
		</div>)
  
}
