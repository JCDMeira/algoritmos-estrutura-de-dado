//* Conversor de decimal para binário

function dec28In(decNumber) {
  let restStack = [];
  let rest;
  let binaryString = "";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}

console.log(dec28In(2));
