export const deleteUser = (userId, userList) =>
  fetch("http://localhost:3001/users/" + userId,{
    method:"DELETE",
    headers:{
      Accept: "application/json",
      "content-type": "application/json"
    }
  })
  .then(response =>{
    if(response.ok){
      return userList.filter(user => user.id !== userId);
    }else{
      throw(new Error(`${response.status}
      (${response.statusText})`))
    }
  })
