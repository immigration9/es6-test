const promise = new Promise((resolve, reject) => {
  let random = Math.random() * 10;
  setTimeout(() => {
    if (random > 5) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});

promise
  .then(() => {
    let number = 5;
    return number + 5;
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('rejected');
  });