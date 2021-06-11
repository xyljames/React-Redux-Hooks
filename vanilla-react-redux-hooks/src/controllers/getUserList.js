export const fetchAllUsers = (error) =>
  fetch("http://localhost:3001/users", {
    method: "GET",
  })
  .then(response => {
    if (response.ok){
      return response;
    }else{ 
      throw(error);
    }
  })
  .then(response => response.json())
  