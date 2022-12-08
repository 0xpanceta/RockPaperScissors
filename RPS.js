function getComputerChoice () {
  let rand = Math.random() * 3
  if (rand < 1) {
    return "Rock"}
  else {
    if (rand < 2) {
      return "Paper"}
    else {return "Scissors"}
  }
}
console.log(getComputerChoice)
