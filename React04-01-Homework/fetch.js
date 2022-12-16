//Fetch exercise
//Fetch Succes

fetch("https://reqres.in/api/users")
  .then((response) => {
    if (response.ok) {
      console.log("Succes");
    } else {
      console.log("Failed");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));

// POST Method
// Fetch have a body

fetch("https://reqres.in/api/users/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));
