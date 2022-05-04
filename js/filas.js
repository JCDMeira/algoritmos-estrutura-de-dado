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

console.log("-----------------------------------------------");

function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = (element, priority) => {
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement); //@ adicionou no lugar da sua prioridade
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement); //@ adicionou um item por último
    }

    console.log(
      "adiciona:",
      queueElement.element,
      ", prioridade : ",
      queueElement.priority
    );
  };

  this.dequeue = () => {
    //@ remove um item
    console.log(
      "removeu:",
      items[0].element,
      ", prioridade : ",
      items[0].priority
    );
    return items.shift();
  };

  this.front = () => {
    //@ retorna o primeiro elemento da fila
    console.log(
      "O primeiro elemento é:",
      items[0].element + " e sua prioridade é: ",
      items[0].priority
    );

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
    for (let i = 0; i < items.length; i++) {
      console.log(
        `Elemento ${i}: ${items[i].element} | prioridade: ${items[i].priority}`
      );
    }
  };
}

const pqueue = new PriorityQueue();

pqueue.enqueue("Carlos", 2);
pqueue.enqueue("Ana", 1);
pqueue.enqueue("Lucas", 1);
pqueue.dequeue();
pqueue.print();
pqueue.front();
pqueue.isEmpty();
pqueue.size();
