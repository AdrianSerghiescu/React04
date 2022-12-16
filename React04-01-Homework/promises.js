//Promises exercise

// Console.log : "Then Succes"

let example1 = new Promise((resolve, reject) => {
  let promise1 = 1 + 1;
  if (promise1 == 2) {
    resolve("Succes");
  } else {
    reject("Failed");
  }
});

example1
  .then((message) => {
    console.log("Then " + message);
  })
  .catch((message) => {
    console.log("catch " + message);
  });

//Console log : if firstUser  = false - in console log it will be Second User Failed
//              if firstUser  = true - in console log it will be First User Succes

const firstUser = true;
const secondUser = false;

function exampleTwoPromise() {
  return new Promise((resolve, reject) => {
    if (firstUser) {
      reject({
        name: "First User ",
        message: "Succes",
      });
    } else if (secondUser) {
      reject({
        name: "Second User ",
        message: "Failed",
      });
    } else {
      resolve("Something..");
    }
  });
}

exampleTwoPromise()
  .then((message) => {
    console.log("succes" + message);
  })
  .catch((error) => {
    console.log(error.name + "" + error.message);
  });
