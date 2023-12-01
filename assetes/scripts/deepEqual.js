function deepEqual (x, y) {
  if (x === y || x == y) { // linter is refusing my second condition of with just == sign i dont know why but the code is running well
    return true
  }
  return false
}

console.log(deepEqual(4, '4'))
console.log(deepEqual(4, 4))
console.log(deepEqual(4, 'c'))
