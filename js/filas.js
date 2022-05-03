function Queue() {
  let items = [];

  this.enqueue = (element) => {
    //@ adiciona um novo item
    items.push(element);
  };

  this.dequeue = () => {
    //@ remove um item
    return items.unshift();
  };

  this.front = () => {
    //@ retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = () => {
    //@ verifica se a fila está vazia ou não
    return items.length === 0;
  };

  this.size = () => {
    //@ retorna o tamanho da fila
    return items.length;
  };

  this.print = () => {
    //@ imprimir a fila no console
    console.log(items.toString());
  };
}
