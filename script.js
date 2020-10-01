console.log("JS");

// event #2
$(document).ready(onReady);

function onReady() {
  console.log("Hello from JQuery");
  // this is where you add an event listeners or aka click events
}
function hello() {
  console.log("Hello");
}
function goodBye() {
  console.log("Goodbye");
}

// anything that is called in here is going to fired first

// evernt #1

onReady();

hello();
goodBye();
