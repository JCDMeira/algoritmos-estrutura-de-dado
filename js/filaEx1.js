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

function hotPotato(name, num) {
  const queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + "was eliminated from Hot Potato Game");
  }

  return queue.dequeue();
}
