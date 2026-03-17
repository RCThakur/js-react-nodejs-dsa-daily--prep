function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const welcome = greet("Rinkesh");
welcome();

//name is remembered even after greet() is done
