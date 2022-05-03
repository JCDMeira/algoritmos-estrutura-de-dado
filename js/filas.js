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

const fila = new Queue();

fila.enqueue("Calos");
fila.enqueue("Ana");
fila.enqueue("Lucas");

fila.print();

fila.dequeue();
fila.print();

fila.dequeue();
fila.print();

fila.isEmpty();
fila.front();

fila.enqueue("Gisele");
fila.size();

fila.dequeue();
fila.dequeue();
fila.isEmpty();
fila.size();
