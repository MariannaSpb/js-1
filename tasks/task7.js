// Write function transform that will transform array of numbers to array of functions that will return value from a base array.
// Example:
//const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// newArray3; // should return 40
// newArray4; // should return 50
//newArray3 = newArray[3]()


const baseArray = [10, 20, 30, 40, 50];


function transform (array) {
    return array.map(function(item) {
        return function() {
            return item;
        }
    });
}

const newArray = transform(baseArray) //получили  внутр.функцию во внешнюю область видимости
newArray3 = newArray[3]()