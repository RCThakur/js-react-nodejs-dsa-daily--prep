/*
JavaScript is single-threaded,
it can only do one thing at a time. 
Synchronous code runs line by line, blocking until each operation completes
Next task waits until current task finishes

*/

console.log("Start");

function slowTask() {
  for (let i = 0; i < 10; i++) {}
  console.log("Task Done");
}

slowTask();

console.log("End");

/*
Outputs
Start
Task Done
End

End waits → because JS is executing one thing at a time

*/
