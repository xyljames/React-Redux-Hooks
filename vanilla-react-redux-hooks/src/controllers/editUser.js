export const editUser = (payload) =>
  fetch("http://localhost:3001/users/" + payload.userId,{
      method:"PATCH",
      body: JSON.stringify(payload),
      headers:{
        Accept: "application/json",
        "content-type": "application/json"
      }
    })
    .then(response =>{
      if(response.ok){
        return response;
      }else{
        throw(new Error( `${response.status}
        (${response.statusText})`))
      }
    }) .then(response => response.json())
 