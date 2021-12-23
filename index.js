// Code your solutions in this file

function writeCards(names) {
    let retVal=[];
    let i = 0;
    while (i < names.length) {
        retVal.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return retVal;
}

let countDown = function(i) {
    console.log(i);
    i>0 && countDown(i-1);
}
    countDown(i);

