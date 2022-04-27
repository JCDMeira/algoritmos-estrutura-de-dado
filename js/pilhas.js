console.log("------------- * Aula 01 de pilhas----------------");

/*
  _ Pilhas são uma coleção ordenada de itens que segue o princípio LIFO
  _ Last In First Out
*/
function stack() {
  let items = [];

  this.push = function (element) {
    //@ Adiciona um novo item ao topo da pilha
    items.push(element);
  };

  this.pop = function () {
    //@ remove um item do topo da pilha
    return items.pop();
  };

  this.peek = function () {
    //@ devolve o elemento que está no topo da pilha
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    //@ informa se a pilha está vazia ou não
    return items.length === 0;
  };

  this.clear = function () {
    //@ Limpa a pilha
    items = [];
  };

  this.size = function () {
    //@ informa o tamanho da pilha
    return items.length;
  };

  this.isEmpty = function () {
    //@ imprime a pilha no console
    console.log(items.toString());
  };
}
