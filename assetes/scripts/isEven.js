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