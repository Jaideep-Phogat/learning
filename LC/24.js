function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  var swapPairs = function(head) {
      if (!head || !head.next) return head; // Fixed condition to correctly handle base cases
      const next = head.next;
      head.next = swapPairs(head.next.next);
      next.next = head;
      return next;
  };
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let value of arr) {
      current.next = new ListNode(value);
      current = current.next;
    }
    return dummy.next;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    let array = [];
    let current = head;
    while (current) {
      array.push(current.val);
      current = current.next;
    }
    return array;
  }
  
  // Test the swapPairs function
  const headArray = [1, 2, 3, 4];
  const headList = arrayToLinkedList(headArray);
  const swappedList = swapPairs(headList);
  const resultArray = linkedListToArray(swappedList);
  
  console.log("Result: ", resultArray); // Output: [2, 1, 4, 3]
  