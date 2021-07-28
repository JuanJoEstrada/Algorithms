// O(n^2)

const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;
  while(swapping) {
    swapping = false
    // Iterate from the first element and stopping at the second-to-last element
    for(let i = 0; i < input.length -1; i++) {
      if (input[i] > input[i+1]) {
        swapCount++
        swap(input, i, i+1)
        swapping = true
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input
}

const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo]
  arr[indexTwo] = arr[indexOne]
  arr[indexOne] = temp
}

bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])

module.exports = bubbleSort;