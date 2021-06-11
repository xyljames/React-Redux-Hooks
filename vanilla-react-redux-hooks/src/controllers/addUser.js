export const addUser = (payload) =>

  fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify(payload.newUser),
    headers:{ Accept:"application/json",
    "content-type": "application/json"
    }
  })
  .then(response => {
    if(response.ok){
      return payload.newUser  
    }else{
      console.log('err',payload)
      throw(new Error( `${response.status}
      (${response.statusText})`))
    }
  })
 
 