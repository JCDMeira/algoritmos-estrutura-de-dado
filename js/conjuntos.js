//* sets

function Set() {
  let items = {};

  this.add = (value) => {
    //@ adiciona um novo item ao conjunto
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = (value) => {
    //@ remove um item ao conjunto
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.has = (value) => {
    //@ devolve se o valor existe ou não
    return items.hasOwnProperty(value);
  };

  this.clear = (value) => {
    //@ remove todos os itens do conjunto
    items = {};
  };

  this.size = (value) => {
    //@ retorna o tamanho do conjunto
    return Object.keys(items).length;
  };

  this.values = (value) => {
    //@ retorna um array com todos os valores do conjunto
    const values = [];
    keys = Object.keys(items);

    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
  };
}
