const API = "https://jsonplaceholder.typicode.com/todos";

fetch(API)
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    return err;
  });
