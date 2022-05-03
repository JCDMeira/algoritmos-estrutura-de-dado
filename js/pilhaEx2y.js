//* Conversor de decimal para bases

function baseConverter(decNumber, base) {
  let restStack = [];
  let rest;
  let baseString = "";
  let hexDigits = "0123456789ABCDF";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / base);
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(2));
