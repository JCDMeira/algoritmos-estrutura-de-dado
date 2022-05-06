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
    let node = new Node(element);

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
  };

  this.indexOf = (element) => {
    //@ retorna a posição do elemento element
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
