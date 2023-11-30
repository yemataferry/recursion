const arr = []
function stepRange (a, b, c) {
  if (c > 0) {
    for (let i = a; i <= b; i += c) {
      arr.push(i)
    }
    return arr
  } else if (c < 0) {
    for (let i = b; i >= a; i += c) {
      arr.push(i)
    }
    return arr
  }
}

console.log(stepRange(1, 5, -1))
// console.log(stepRange(1, 10, 2))
