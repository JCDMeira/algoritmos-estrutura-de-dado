function fatorial(n) {
  if (n === 1) {
    return n;
  } else {
    return (n *= fatorial(n - 1));
  }
}

console.log("fat:", fatorial(6));
