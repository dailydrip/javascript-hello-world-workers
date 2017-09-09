self.addEventListener("message", function(e) {
  var value = e.data;

  function fib(value) {
    if (value <= 1) {
      return value;
    } else {
      return fib(value - 1) + fib(value - 2);
    }
  }

  var result = fib(value);
  self.postMessage(result);
});
