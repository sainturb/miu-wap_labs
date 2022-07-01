function LinkedList() { }
LinkedList.prototype.add = function (value) {
  if (this.value === undefined) {
    this.value = value;
    this.next = null;
  } else {
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = { value: value, next: null };
  }
}

LinkedList.prototype.remove = function (value) {
  var current = this;
  var prev = null;
  while (current) {
    if (current.value === value) {
      if (prev == null) {
        this.value = current.next.value;
        this.next = current.next.next;
      } else {
        prev.next = current.next;
      }
      return true;
    }
    prev = current;
    current = current.next;
  }
  return false;
}

LinkedList.prototype.print = function () {
  let result = 'LinkedList{';
  result = this.printHelper(this, result);
  result += '}\n';
  document.getElementById('console5').innerText += result;
  console.log(result);
}

LinkedList.prototype.printHelper = function (list, result) {
  if (list.next == null) {
    result += list.value;
    return result;
  }
  result += list.value + ',';
  return this.printHelper(list.next, result);
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};