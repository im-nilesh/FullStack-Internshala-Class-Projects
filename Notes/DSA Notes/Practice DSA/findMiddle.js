class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function push(data) {
  let newNode = new Node(data);
  newNode.next = head;
  head = newNode;
}

let head = null;

function findMiddle() {
  let count = 1;
  let mid = head;

  while (head.next != null) {
    head = head.next;
    count++;
  }
  if (counter % 2 == 0) {
    mid = mid.next;
  }
  return mid;
}
