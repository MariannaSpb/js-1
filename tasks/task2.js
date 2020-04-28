// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

function convert(obj) {
 return Object.entries(obj)
}

//convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})

//FIXED:
//es5
function convert(obj) {
    var keysOfObject = Object.keys(obj);
    return keysOfObject.map(function (key) {
        return [key, obj[key]];
    });
};