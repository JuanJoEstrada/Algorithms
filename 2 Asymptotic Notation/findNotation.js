// Finding the Big O

// O(log n)
function divideByTwo(n) {
  let countIterations = 0;
  while (n > 1) {
    n = n / 2;
    countIterations++;
  }
  return countIterations;
}

// Finding the Maximum Value in a Linked List
// O(n)
function findMax(list) {
  let current = list.head;
  let max = current.data;
  while (current.getNextNode() !== null) {
    current = current.getNextNode();
    let val = current.data;
    if (val > max) {
      max = val;
    }
  }
  return max;
}

// Sorting a Linked List
// O(n^2)
function sortLinkedList(list) {
  let newList = new LinkedList();
  while (list.head !== null) {
    let currentMax = findMax(list);
    list.remove(currentMax);
    newList.addToHead(currentMax);
  }
  return newList;
}

// Stack Runtimes vs Queue Runtimes
// -- Removing the First Value Added to a Queue
// ---- A queue is a FIFO (first in, first out) data structure, which means that the first element added to it, will always be the first element removed from it. Removing this element does not require you to iterate through the queue.

// -- Removing the First Value Added to a Stack
// ---- On the other hand, a stack is a FILO (first in, last out) data structure. This means that the first element added will be the last element removed. Removing this element will require you to iterate through the stack, all the way to the bottom.
// *The big O runtime of removing the first element added to a Queue is O(1), and the big O runtime of removing the first element added to a Stack is O(n).

// Hash Map Runtimes vs Linked List Runtimes
// -- Retrieving an Element from a Linked List
// ---- To find an element in a linked list, you will have to search through the entire list to see if the element is there. Refer to the findMax() function you looked at above for an example. Iterating through the list means that this process has a big O runtime of O(n).
// -- Retrieving an Element from a Hash Map
// ---- Separate Chaining
// ------ One way to solve hash map collisions is to create a linked list at the array index where the collision occurred. All elements that hash to the same index will be in that list. This means that to find an element in a hash map that uses separate chaining, you must first find the correct index, and then search through the list at that index (if there is more than one element).
// ------ Given the multiple steps required to retrieve an element from a hash map that uses separate chaining, you get O(n)
// ---- Open Addressing
// ------ Another way to solve hash map collisions is to simply move down the array until you find an open index, and place the element there. This is a type of open addressing that is called linear probing. When retrieving an element from a hash map that uses linear probing, the worst case would be if the element hashes to the first index, but is actually at the last index. Since you would have to search through the entire array, the big O runtime for retrieving an element from this kind of hash map is O(n).