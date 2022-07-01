
class LinkedList {

  constructor(arr) {
    if (arr) {
      arr.forEach(item => this.add(item));
    }
  }

  add(value) {
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

  remove(value) {
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

  print() {
    let result = 'LinkedList{';
    result = this.helper(this, result);
    result += '}\n';
    const console1 = document.getElementById('console1');
    console1.innerText += result;
    console.log(result);
  }

  helper(list, result) {
    if (list.next == null) {
      result += list.value;
      return result;
    }
    result += list.value + ',';
    return this.helper(list.next, result);
  }
}

var linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}