function Dictionary() {
  let items = {};

  this.set = (key, value) => {
    //@ adiciona um novo item ao dicionário
    items[key] = value;
  };

  this.delete = (key) => {
    //@ remove o valor do dicionário usando a chave
    if (this.has(key)) {
      const deleted = items[key];
      delete items[key];
      return `${key}: ${deleted}`;
    }
    return undefined;
  };

  this.has = (key) => {
    //@ verifica se a chave existe e retorna um booleano
    return items.hasOwnProperty(key);
  };

  this.get = (key) => {
    //@ devolve um valor específico a partir da chave
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = () => {
    //@ remove todos os itens do dicionário
    items = {};
  };

  this.size = () => {
    //@ retorna a quantidade de elementos contidos no dicionário
    return Object.keys(items).length;
  };

  this.keys = () => {
    //@ devolve um array com todas as chaves do dicionário
    return Object.keys(items);
  };

  this.values = () => {
    //@ devolve um array com todos os valores do dicionário
    const values = [];
    const keys = Object.keys(items);

    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.getItems = () => {
    return items;
  };
}

const dic = new Dictionary();

dic.set("Gandalf", "gandalf@email.com");
dic.set("John", "john@email.com");
dic.set("Tyrion", "tyrion@email.com");

console.log(dic.has("John"));
console.log(dic.has("Jasm"));
console.log(dic.size());
console.log(dic.get("Gandalf"));
console.log(dic.get("Glad"));
console.log(dic.keys());

console.log(dic.values());

console.log(dic.getItems());
console.log(dic.delete("John"));
console.log(dic.getItems());
dic.clear();
console.log(dic.getItems());
