// write a fxn called countBs that takes a string as it only arg and returns a number that indicates how many uppercase "B" characters are in the string 
// countBs("Bombastic") => 1
// countBs ("bbbbbBBBBomB") => 5

let count = 0;
function countBs(str) {
  for (let i = 0; i <= str.length - 1; i++){
    if ( str[i] === 'B')
    count += 1
  }
  return count
}

console.log(countBs('BaBByBoo'))