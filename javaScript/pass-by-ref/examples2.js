function updateObject(obj) {
  obj.name = "Rinkesh"; //Changes affect the original object
  console.log("Inside Function:", obj);
}

let user = { name: "Amit" }; //The Object

updateObject(user);

console.log("OutSide Function : ", user);

//Both obj and user point to the same memory location that wht we are getting same value
