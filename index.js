// Code your solutions in this file
const nameList = ["Ada", "Brendan", "Ali"];

function writeCards(nameList, eventName) {
    const newList = [];
    for (let i =0; i <nameList.length; i++) {
        newList.push(`Thank you, ${nameList[i]}, for the wonderful ${eventName} gift!`)
    }
    return newList 
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i); i--;
    }
}