// Juan, you may find the syntax to be more readable and easier to understand when addressing certain problems

const iterativeFactorial = (n) => {
  let result = 1
  while(n > 0) {
    result *= n
    n -= 1
  }
  return result
}

const recursiveFactorial = (n) => {
  // "Base case" is the conditions under which the function returns a value without making any additional calls to itself
  if (n === 1) return 1
  // "Recursive case" is the condition under which a function calls itself
  if (n > 0) {
    console.log(`Execution context: ${n}`)
    return n * recursiveFactorial(n - 1)
  }
}

const fourFactorial = iterativeFactorial(4)
console.log('Iterative factorial:', fourFactorial)

const recursiveSolution = recursiveFactorial(4);
console.log('Recursive factorial:', recursiveSolution)

module.exports = {
  iterativeFactorial,
  recursiveFactorial,
}