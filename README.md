## 1 Recursion
Recursion has two fundamental aspects: the base case and the recursive step.

When using iteration, we rely on a counting variable and a boolean condition. For example, when iterating through the values in a list, we would increment the counting variable until it exceeded the length of the dataset.

Recursive functions have a similar concept, which we call the base case. The base case dictates whether the function will recurse, or call itself. Without a base case, it’s the iterative equivalent to writing an infinite loop.

Because we’re using a call stack to track the function calls, your computer will throw an error due to a stack overflow if the base case is not sufficient.

The other fundamental aspect of a recursive function is the recursive step. This portion of the function is the step that moves us closer to the base case.

## 2 Asymptotic Notation
When scaling programs to deal with massive amounts of data, writing efficient code becomes the difference between success and failure. In computer science, we define how efficient a program is by its runtime.

With asymptotic notation, we calculate a program’s runtime by looking at how many instructions the computer has to perform based on the size of the program’s input. In asymptotic notation, we define the size of the input as N. I may be looking through a collection of 10 elements, or 100 elements, but we only need to know how many steps are performed relative to the input so N is used in place of a specific number. If there is a second input, we may define the size of that input as M.

## 3 Bubble Sort
Bubble sort is an algorithm to sort a list through repeated swaps of adjacent elements. It has a runtime of O(n^2).

For nearly sorted lists, bubble sort performs relatively few operations since it only performs a swap when elements are out of order.

## 4 Merge Sort
Merge sort is a sorting algorithm created by John von Neumann in 1945. Merge sort’s “killer app” was the strategy that breaks the list-to-be-sorted into smaller parts, sometimes called a divide-and-conquer algorithm.

In a divide-and-conquer algorithm, the data is continually broken down into smaller elements until sorting them becomes really simple.

Merge sort was unique for its time in that the best, worst, and average time complexity are all the same: Θ(N*log(N)). This means an almost-sorted list will take the same amount of time as a completely out-of-order list. This is acceptable because the worst-case scenario, where a sort could stand to take the most time, is as fast as a sorting algorithm can be.

Merge sort also requires space. Each separation requires a temporary array, and so a merge sort would require enough space to save the whole of the input a second time. This means the worst-case space complexity of merge sort is O(N).