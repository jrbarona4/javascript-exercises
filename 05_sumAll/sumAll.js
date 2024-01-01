const sumAll = function(firstNum, secondNum) {
    let finalSum = 0;
    if (firstNum < 0 || secondNum < 0){
    return 'ERROR';
    } else if (firstNum >= secondNum){ 
    for (i = secondNum; i <= firstNum; i++){
        finalSum = (i * (secondNum + firstNum)) / 2;
    }
    return finalSum;
    } if (firstNum <= secondNum){
       for (i = firstNum; i <= secondNum; i++){
        finalSum = (i * (firstNum + secondNum)) / 2;
    }
       return finalSum;
   }
};

// Do not edit below this line
module.exports = sumAll;
