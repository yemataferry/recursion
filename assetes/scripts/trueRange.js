const arr = []
function trueRange(a, b, c) {
  if (c == 0) {
    return 1
  } else if (c > 0) {
    for (let i = a; i <= b; i+=c) {
      arr.push(i)
    }
  return arr
  } else if (c < 0) {
    for (let i = b; i >= a; i+=c) {
      arr.push(i)
    }
  return arr
  }
  else {
    for (let i = a; i <= b; i++) {
      arr.push(i)
    }
  return arr
  }
}

// console.log(trueRange(1, 10, 2))
console.log(trueRange(1, 5, -1))
// console.log(trueRange(1, 5))
