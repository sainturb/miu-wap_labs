function LinkedList() {}
LinkedList.prototype.add = function(value) {

}

LinkedList.prototype.remove = function(value) {
  
}

LinkedList.prototype.print = function() {
  console.log(this);
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};