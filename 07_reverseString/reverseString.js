const reverseString = function(phrase) {
    reversedPhrase = "";
    for(i = 0; i<phrase.length; i++){
        reversedPhrase = reversedPhrase +phrase[(phrase.length-1)-i];
    }

    return  reversedPhrase;
};


// Do not edit below this line
module.exports = reverseString;
