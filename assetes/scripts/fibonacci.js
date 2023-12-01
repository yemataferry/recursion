const arr = []
let previous = 0
let current = 1
let next
function fibonacci (n) {
  for (let i = 1; i <= n; i++) {
    next = previous + current
    arr.push(next)
    previous = current
    current = next
  }
  return arr
}

console.log(fibonacci(5))
// [0, 1, 1, 2, 3, 5, 8]
