// Write largest and smallest functions that returns the largest and smallest number passed like a argument.
// Example:

// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5


function largest() {
    var result = arguments[0];
     for (var i = 0; i < arguments.length; i += 1) {
        if (result < arguments[i]) {
       result = arguments[i];
     }
     }
     return result;
 }

largest(2, 0.1, -5, 100, 3) // 100


function smallest() {
    var result = arguments[0];
     for (var i = 0; i < arguments.length; i += 1) {
        if (result > arguments[i]) {
       result = arguments[i];
     }
     }
     return result;
 }

 smallest(2, 0.1, -5, 100, 3) // -5