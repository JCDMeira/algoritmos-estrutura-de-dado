function HashTable() {
  let table = [];

  this.put = (key, value) => {
    //@ insere elemento
    let position = losoloseHashCode(key);
    console.log(position + " " + key);
    table[position] = value;
  };

  this.remove = (key) => {
    //@ remove elemento
    table[losoloseHashCode(key)] = undefined;
  };

  this.get = (key) => {
    //@ retorna um elemento
    return table[losoloseHashCode(key)];
  };

  let losoloseHashCode = (key) => {
    //@ retorna hash (valor numérico)
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
}
