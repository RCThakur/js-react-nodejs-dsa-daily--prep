/*
Asynchronous means non-blocking execution, 
where tasks can run in the background while the program continues.
 - Code does NOT wait for long tasks
 - Moves to next line while task runs in background
*/

console.log("Start");

setTimeout(() => {
  console.log("Task Done");
}, 2000);

console.log("End");

/*
Output
Start
End
Task Done  -> after 2 second

Reason setTimeout runs later, JS doesn’t wait
The program doesn’t wait for setTimeout → that’s asynchronous behavior
*/
