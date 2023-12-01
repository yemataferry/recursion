function deepEqual (x, y) {
  if (x === y) {
    return true
  }
  else if (x == y ) {
    return true
  }
  return false
}

console.log(deepEqual(4, '4'))
console.log(deepEqual(4, 4))
console.log(deepEqual(4, 'c'))
