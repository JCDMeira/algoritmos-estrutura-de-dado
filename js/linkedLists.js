//* listas ligadas

function LikedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = (element) => {
    //@ adiciona um elemento no final da lista
    let node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
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
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
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
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
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
  };

  this.size = (element) => {
    //@ retorna o tamanho da instância
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

let linkedList = new LikedList();

linkedList.append("João");
linkedList.append("José");
linkedList.append("Maria");

linkedList.print();
// linkedList.removeAt(1);
// linkedList.print();
linkedList.insert(0, "Carlos");
linkedList.print();
linkedList.insert(2, "Ana");
linkedList.print();
console.log(linkedList.indexOf("José"));
console.log(linkedList.indexOf("Carlos"));
console.log(linkedList.indexOf("Lucas"));

const removedElement = linkedList.remove("João");
console.log(removedElement);

const removedElement2 = linkedList.remove("Lucas");
console.log(removedElement2);
