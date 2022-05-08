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
  };

  this.removeAt = (position) => {
    //@ remove um elemento de uma posição especifica
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
