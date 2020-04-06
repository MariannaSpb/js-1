
// Write function countDown. Function expects number and logs values one by one till zero with one second delay.
// Example:

// countDown(3); // 3 2 1 0




function countDown (num) {
    // var num = arguments.length;
    for (var i = 0; i < num + 1; i++) {
        setTimeout(function(indexLocal) {
          return function() {
            console.log(indexLocal);
          }
          
        } (i), 1000);
      }
}

countDown(3) //0 1 2 3



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




// function countDown (num) {
//     // var num = arguments.length;
//     for (var i = 0; i < num + 1; i++) {
//        console.log(i)
//         }
//   };
//   setTimeout(countDown(3), 3000);