const url = "https://jsonplaceholder.typicode.com/posts/";
const falseUrl = "https://jsonplaceholder.typicode.com/wrongurl/";
const falseUrl2 = "https://notevenaurl123123123123123.com/";

fetch(url)
  .then(data => console.log(data));

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

fetch(falseUrl)
  .then(response => console.log(response))
  .catch(error => console.log(error));

fetch(falseUrl2)
  .then(response => console.log(response))
  .catch(error => console.log(error));

  