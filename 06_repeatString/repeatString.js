const repeatString = function(phrase, repeatCount) {
    if(repeatCount>=0){
        repeatedPhrase = "";
        for(i = 0;i<repeatCount; i++){
            repeatedPhrase =repeatedPhrase + phrase;
        }  
        return repeatedPhrase;

    }
    return "ERROR";

};

// Do not edit below this line
module.exports = repeatString;
