// *** write a fxn range that takes 2 args start and end returns an array containing all the numbers from start up to end
// e.g range(1, 5) => [1, 2, 3, 4, 5]

let arr = []
function range(a, b){
  for (i = a; i <= b; i++){
    arr.push(i) 
  }
  return arr
}

console.log(range(1, 5))
