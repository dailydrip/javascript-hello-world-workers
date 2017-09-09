var FIB_VALUE = 37;

var worker = new Worker("worker.js");
var worker2 = new Worker("worker.js");

worker.addEventListener("message", function(e) {
  console.log("Result Worker 1: ", e.data);
});

worker2.addEventListener("message", function(e) {
  console.log("Result Worker 2: ", e.data);
});

worker.postMessage(FIB_VALUE);
worker2.postMessage(FIB_VALUE);
