// write a fxn isEven which check if a number is even or odd using recursion
// hint: 0 is even and 1 is odd, for any other number N, it's even is the same as N-2
// Notice how it works when N is negative, try to fix it 

function isEven (a) {
  if (a % 2 == 0) {
    return 'even'
  } else if (a % 2 != 0) {
    return 'odd'
  }
}

console.log(isEven(3))
console.log(isEven(6))
console.log(isEven(-6))