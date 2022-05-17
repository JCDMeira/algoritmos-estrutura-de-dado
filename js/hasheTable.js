function LinkedList() {
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

function HashTable() {
  let table = [];

  const ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = () => `[ ${this.key} - ${this.value}]`;
  };

  this.set = (key, value) => {
    //@ adiciona um novo item ao dicionário
    items[key] = value;
  };

  this.put = (key, value) => {
    //@ insere elemento
    let position = loseloseHashCode(key);

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  // this.put = (key, value) => {
  //   //@ insere elemento
  //   let position = loseloseHashCode(key);
  //   // console.log(position + " " + key);
  //   table[position] = value;
  // };

  this.remove = (key) => {
    //@ remove elemento
    let position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };

  // this.remove = (key) => {
  //   //@ remove elemento
  //   table[loseloseHashCode(key)] = undefined;
  // };

  this.get = (key) => {
    //@ retorna um elemento
    let position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      let current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  // this.get = (key) => {
  //   //@ retorna um elemento
  //   return table[loseloseHashCode(key)];
  // };

  const loseloseHashCode = (key) => {
    //@ retorna hash (valor numérico)
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
      // console.log(key[i] + " : " + key.charCodeAt(i));
    }
    // console.log(hash);
    return hash % 37;
  };

  this.size = () => table.length;

  this.print = () => {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) console.log(i + " : " + table[i]);
    }
  };
}

const hash = new HashTable();

hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "john@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.get("Gandalf"));
console.log(hash.get("José"));
console.log(hash.size());

hash.remove("Gandalf");
console.log(hash.get("Gandalf"));
console.log(hash.size());

console.log("------- Tratamento de colisão -------");

hash.put("Gandalf", "gandalf@email.com");
hash.put("Aaron", "Aaron@email.com");
hash.put("Donnie", "Donnie@email.com");
hash.put("Ana", "Ana@email.com");
hash.put("Jonathan", "Jonathan@email.com");
hash.put("Jamie", "Jamie@email.com");
hash.put("Mindy", "Mindy@email.com");
hash.put("Paul", "Paul@email.com");
hash.put("Nathan", "Nathan@email.com");

hash.print();

console.log(hash.get("Marcos"));
console.log(hash.get("Paul"));
console.log("remove", hash.remove("Marcos"));
console.log("remove", hash.remove("Jonathan"));
console.log("remove", hash.remove("Paul"));
