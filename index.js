// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const newArray = [];

function writeCards(names, event){
    newArray.length = 0;
    
    for (let i = 0; i < names.length; i++) {
        let cardMsg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(cardMsg);
    }
    return newArray;
}
const result = writeCards(names, event);
console.log(result);

function countDown() {
    let startingNumber = 10;
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  countDown(10);