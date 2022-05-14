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

  const losoloseHashCode = (key) => {
    //@ retorna hash (valor numérico)
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
      // console.log(key[i] + " : " + key.charCodeAt(i));
    }
    // console.log(hash);
    return hash % 37;
  };
}

const hash = new HashTable();

hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "john@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.get("Gandalf"));
console.log(hash.get("José"));

hash.remove("Gandalf");
console.log(hash.get("Gandalf"));
