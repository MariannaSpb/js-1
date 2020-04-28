// Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion
// Example:

// sum(1,3,5,7); //should return 16

function sum() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }

    return sum;
}

sum(1,3,5,7); //should return 16
sum(1,1,1,1); //4 


//FIXED
function sum() {
    var props = [].slice.call(arguments);
    return (function introFunc(props) {
        if (props.length === 0) {
            return 0;
        }
        return props.pop() + introFunc(props);
    })(props);
};

sum(1,3,5,7); //should return 16
sum(1,1,1,1); //4 