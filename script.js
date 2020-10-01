console.log("JS");

// event #2
$(document).ready(onReady);

function onReady() {
  console.log("Hello from JQuery");
  // this is where you add an event listeners or aka click events
  //get data to display
  $("#clickMe").on("click", buttonClicked);
}

function buttonClicked() {
  console.log("I'm clicked!!");
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
