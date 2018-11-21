export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  insert(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
    }
  }
  forEach(cb) {
    for (let it = this.head, idx = 0; it; it = it.next, idx++) {
      cb(it, idx);
    }
  }
}