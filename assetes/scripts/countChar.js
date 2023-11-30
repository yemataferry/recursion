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
// console.log(countChar('AnAphilAcTic', 'A'))