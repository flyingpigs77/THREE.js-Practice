// Doubly Linked list Node
class Node {
  // Constructor to create a new node
  // next and prev is by default initialized as null
  constructor(val) {
      // To store the value
      this.data = val;

      // To link the next Node
      this.next = null;

      // TO link the previous Node
      this.prev = null;
  }
}

// Doubly Linked List
class DoublyLinkedList {
  // Constructor to create a new linked list
  constructor() {
      // To contain the first item of the list
      this.head = null;

      // To contain the last item of the list
      this.tail = null;
  }

  // To check if the list is empty
  isEmpty() {
      if (this.head == null) return true;
      return false;
  }

  // Method to add item at the last of doubly linked list
  addItem(val) {
       
      // Create a temporary variable
      let temp = new Node(val);

      // If the list is empty link assign
      // new node to both head and tail
      if (this.head == null) {
          this.head = temp;
          this.tail = temp;
      }

      // else add item to the tail and shift tail
      else {
          this.tail.next = temp;
          this.tail = this.tail.next;
      }
  }

  // To traverse and display the list
  display() {

      // Check if the List is empty
      if (!this.isEmpty()) {

          // traverse the list using new current pointer
          let curr = this.head;
          while (curr !== null) {

              // Display element
              console.log(curr.data);

              // Shift the current pointer
              curr = curr.next;
          }
      }
  }
}


const d100 = new Navigation();
d100.addItem(100);
d100.addItem(101);
d100.addItem(102);
d100.addItem(117.5); //117B

const d101 = new Navigation();
d101.addItem(100);
d101.addItem(101);
d101.addItem(102);

const d102 = new Navigation();
d101.addItem(101);
d101.addItem(102);

const d117B = new Navigation();
d117B.addItem(100);
d117B.addItem(117.5); //117B
d117B.addItem(117);

const d117 = new Navigation();
d131.addItem(117.5); //117B
d117.addItem(117);
d117.addItem(118);

const d118 = new Navigation();
d118.addItem(117);
d118.addItem(118);

const d119 = new Navigation();
d119.addItem(119);
d119.addItem(120);
d119.addItem(121);
d119.addItem(122);

const d120 = new Navigation();
d120.addItem(119);
d120.addItem(120);
d120.addItem(121);

const d121 = new Navigation();
d121.addItem(119);
d121.addItem(120);
d121.addItem(121);
d121.addItem(122);

const d122 = new Navigation();
d122.addItem(119);
d122.addItem(121);
d122.addItem(123);

const d123 = new Navigation();
d123.addItem(122);
d123.addItem(123);
d123.addItem(131);

const d131 = new Navigation();
d131.addItem(123);
d131.addItem(131);
d131.addItem(132.5); //132A
d131.addItem(132);

const d132A = new Navigation();
d132A.addItem(131);
d132A.addItem(132.5); //132A
d132A.addItem(132);

const d132 = new Navigation();
d132.addItem(132.5); //132A
d132.addItem(132);
d132.addItem(133);

const d133 = new Navigation();
d133.addItem(132);
d133.addItem(133);
d133.addItem(134);
d133.addItem(136);
d133.addItem(136.5); //136A

const d134 = new Navigation();
d134.addItem(133);
d134.addItem(134);
d134.addItem(135);
d134.addItem(136);
d134.addItem(136.5); //136A

const d135 = new Navigation();
d135.addItem(134);
d135.addItem(135);
d135.addItem(137);

const d136 = new Navigation();
d136.addItem(133);
d136.addItem(134);
d136.addItem(136.5); //136A

const d136A = new Navigation();
d136A.addItem(133);
d136A.addItem(134);
d136A.addItem(136);
d136A.addItem(136.5); //136A