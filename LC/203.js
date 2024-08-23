function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
  if (!head) return head;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
};

function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  let array = [];
  let current = head;
  while (current) {
    array.push(current.val);
    current = current.next;
  }
  return array;
}

const headArray = [1, 2, 6, 3, 4, 5, 6];
const headList = arrayToLinkedList(headArray);
const valToRemove = 6;
const resultList = removeElements(headList, valToRemove);
const resultArray = linkedListToArray(resultList);

console.log("Result: ", resultArray);
