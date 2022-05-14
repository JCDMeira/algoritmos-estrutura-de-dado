function Dictionary() {
  const items = {};

  this.set = (key, value) => {
    //@ adiciona um novo item ao dicionário
    items[key] = value;
  };

  this.delete = (key) => {
    //@ remove o valor do dicionário usando a chave
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
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
}
