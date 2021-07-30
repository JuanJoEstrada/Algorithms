/* 
Splitting the input array:
The algorithm recursively splits the input array until each element is in its own array.

Merging sorted arrays:
The algorithm compares and combines the elements of arrays until the input array is sorted.
*/

const mergeSort = (startArray) => {
  const length = startArray.length
  // Base case
  if (length === 1) {
    console.log(startArray)
    return startArray
  }
  // Preparing recursive case
  // Splitting
  const mid = Math.floor(length/2)
  const leftArray = startArray.slice(0, mid)
  const rightArray = startArray.slice(mid, length)
  // Recursive case
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while(leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0])
      leftArray.shift()
    } else {
      sortedArray.push(rightArray[0])
      rightArray.shift()
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray)
}

const inputArr = [3, 5, 2, 90, 4, 7]

console.log(mergeSort(inputArr))

module.exports = {
  mergeSort
}