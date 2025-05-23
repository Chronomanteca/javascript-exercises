const sumAll = function(a,b) {

    if(Number.isInteger(a) == Number.isInteger(b) == true){
        if(a >= 0 && b >=0 && a){
            sum = 0;
            if(a>b){
                [a,b] = [b,a];
            }
            for(i=a;i<=b;i++){
                sum = sum+i;
            }
            return sum;
        }
    }

    return "ERROR";


};

// Do not edit below this line
module.exports = sumAll;
