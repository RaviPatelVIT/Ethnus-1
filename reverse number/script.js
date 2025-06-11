function reverseNumber(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''));
  return reversed;
}

console.log(reverseNumber(12345));
