// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized.
// Example:

// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase (str) {
    // var new = word.indexOf('-')
    var arr = str.split(/-|_/gm); //массив слов по разделителям
    var firstPart = arr[0] //сохранили первую часть, тип строка
    var secondPart = arr.filter(function (item, index) {
        return index > 0;
    }); // новый массив из остатка слов

    var newStr = [];
    secondPart.forEach(function(item) {
        var result = item.charAt(0).toUpperCase() + item.substr(1);
        newStr.push(result);
        return newStr;
    });
    return firstPart + newStr.join('');
}

toCamelCase("the-stealth-warrior"); //"theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // "TheStealthWarrior"