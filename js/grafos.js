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

function Graph() {
  let vertices = [];
  let adjList = new Dictionary();

  this.addvertex = (v) => {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = (v, w) => {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = () => {
    let s = "";

    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " ->";

      let neighbors = adjList.get(vertices[i]);

      for (let j = 0; j < neighbors.length; j++) {
        const s = neighbors[j];
      }

      s += "\n";
    }
    return s;
  };
}
