const arr = [1, 2, 3, 4, 5, 6, 7]
let count = 0
let avg 
function average() {
  for (let i = 0; i <= arr.length - 1; i++) {
    count += arr[i]
  }
  avg = count / arr.length
  return avg
}

console.log(average(avg))
