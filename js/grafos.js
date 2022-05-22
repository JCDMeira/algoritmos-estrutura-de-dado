function Queue() {
  let items = [];

  this.enqueue = (element) => {
    //@ adiciona um novo item
    console.log("adicionou:", element);

    items.push(element);
  };

  this.dequeue = () => {
    //@ remove um item
    console.log("removeu:", items[0]);
    return items.shift();
  };

  this.front = () => {
    //@ retorna o primeiro elemento da fila
    console.log("O primeiro elemento é:", items[0]);
    return items[0];
  };

  this.isEmpty = () => {
    //@ verifica se a fila está vazia ou não
    console.log(items.length === 0 ? "está vazio" : "não está vazio");
    return items.length === 0;
  };

  this.size = () => {
    //@ retorna o tamanho da fila
    console.log("O tamanho da fila é:", items.length);
    return items.length;
  };

  this.print = () => {
    //@ imprimir a fila no console
    console.log(items.toString());
  };
}

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

  this.addVertex = (v) => {
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
      s += vertices[i] + " -> ";

      let neighbors = adjList.get(vertices[i]);

      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }

      s += "\n";
    }
    return s;
  };

  const initializeColor = () => {
    const color = [];

    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = (v, callback) => {
    const color = initializeColor(),
      queue = new Queue();

    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = adjList.get(u);

      color[u] = "grey";

      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];

        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      callback(u);
    }
  };
}

const printNode = (value) => {
  console.log("Visited vertex: ", value);
};

const graph = new Graph();

const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

myVertices.forEach((vertice) => graph.addVertex(vertice));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());
