const removeFromArray = function() {

    let array = arguments[0];
    
    for(i=1;i<arguments.length;i++){
        let elementRemove = arguments[i];
        for(j=0; j<array.length;j++){

            let indexItemRemove = array.findIndex((item) => (item == elementRemove && typeof item) == typeof elementRemove);
            if(indexItemRemove > -1){
                array.splice(indexItemRemove,1);
            }
            
        }
        
    }    
    
    return array;

};





// Do not edit below this line
module.exports = removeFromArray;
