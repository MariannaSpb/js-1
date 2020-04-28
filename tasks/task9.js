
// Write function countDown. Function expects number and logs values one by one till zero with one second delay.
// Example:

// countDown(3); // 3 2 1 0




function countDown (num) {
    // var num = arguments.length;
    for (var i = num; i >= 0; i--) {
        setTimeout(function(indexLocal) {
          return function() {
            console.log(indexLocal);
          }
          
        } (i), 3000);
      }
}

countDown(3) // 3 2 1 0

//FIXED:
function countDown(num) {
  var timer = setInterval(function () {
      if (num < 0) {
          clearInterval(timer);
      } else {
          console.log(num);
          num--;
      }
  }, 1000);
};



