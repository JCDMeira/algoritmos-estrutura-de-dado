//* listas duplamente ligadas

function DoublyLikedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  this.append = (element) => {
    //@ adiciona um elemento no final da lista
    let node = new Node(element),
      current;

    if (head === null) {
      head = node;
      tail = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
      tail = node;
    }

    length++;
  };

  this.insert = (position, element) => {
    //@ adiciona um elemento em uma posição especifica
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = (position) => {
    //@ remove um elemento de uma posição especifica
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.remove = (element) => {
    //@ remove o elemento element (recebido por parâmetro)
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = (element) => {
    //@ retorna a posição do elemento element
    let current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.isEmpty = (element) => {
    //@ retorna se a lista está vazia ou não
    return length === 0;
  };

  this.size = (element) => {
    //@ retorna o tamanho da instância
    return length;
  };

  this.getHead = () => {
    return head;
  };

  this.getTail = () => {
    return tail;
  };

  this.toString = (element) => {
    //@ converte em string
    let current = head;
    let string = "";

    while (current) {
      string += current.element + " ";
      current = current.next;
    }

    return string;
  };

  this.print = (element) => {
    //@ imprime no console
    console.log(this.toString());
  };
}

const dll = new DoublyLikedList();

dll.append("João");
dll.append("José");
dll.append("Maira");
dll.insert(0, "Carlos");
dll.insert(4, "Lucas");
dll.insert(2, "Ana");
dll.print();

dll.removeAt(0);
dll.print();
dll.removeAt(4);
dll.print();
dll.removeAt(2);
dll.print();
