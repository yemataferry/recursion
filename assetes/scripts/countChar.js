// write a fxn called countChar that behaves like countBs expect it takes a second arg that indicates the character that is to be counted
// countChar("car", "c") => 1
// countChar("capricious", "c") => 2

let count = 0
function countChar (str, charact) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === charact) {
      count += 1
    }
  }
  return count
}

console.log(countChar('BanaBBasaB', 'B'))
console.log(countChar('AnAphilAcTic', 'A'))
