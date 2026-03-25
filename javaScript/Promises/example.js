//Create and consume a Promise?

const fetchData = new Promise((res, rej) => {
  setTimeout(() => {
    const flag = true;
    if (flag) {
      res("Data Fetch");
    } else {
      rej("Something Worng");
    }
  }, 1000);
});

fetchData
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
