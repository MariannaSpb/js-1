// Write a function that takes a sentence (string) and reverses each word in the sentence.
// Example:

// " A fun little challenge! " => " A nuf elttil !egnellahc "


function reverseWords (str) {
    var array = str.split(' '); //массив слов
    var newSentence = array.map(function(item) {
        return item.split('').reverse().join('')
    })
    return newSentence.join(' ')
}

reverseWords('A fun little challenge!') //" A nuf elttil !egnellahc "


