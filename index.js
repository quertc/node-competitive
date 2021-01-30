process.stdin.resume();
process.stdin.setEncoding('utf-8');

const { EOL } = require('os');

let inputString = '';
let currentLine = 0;

function readline() {
  return inputString[currentLine++];
}

function main() {
  const foo = readline();
  console.log(foo);
}

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.split(EOL).map(str => str.trim());

  main();
});
