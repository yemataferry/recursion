let arr = [1, 2, 3, 4, 5]
let count = 0;
function sum() {
  for (i = 0; i <= arr.length - 1; i++){
    count += arr[i]
  }
    return count
}

console.log(sum(count))