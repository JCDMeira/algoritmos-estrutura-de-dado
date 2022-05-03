//* Conversor de decimal para bases

function baseConverter(decNumber, base) {
  let restStack = [];
  let rest;
  let baseString = "";
  let digits = "0123456789ABCDF";

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

console.log(baseConverter(26, 2));
console.log(baseConverter(26, 8));
console.log(baseConverter(26, 10));
console.log(baseConverter(26, 16));
console.log(baseConverter(26, 3));
