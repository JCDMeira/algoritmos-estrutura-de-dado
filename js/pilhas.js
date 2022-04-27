console.log("------------- * Aula 01 de pilhas----------------");

/*
  _ Pilhas são uma coleção ordenada de itens que segue o princípio LIFO
  _ Last In First Out
*/
function stack() {
  let items = [];

  this.push = function (element) {
    //@ Adiciona um novo item ao topo da pilha
  };

  this.pop = function () {
    //@ remove um item do topo da pilha
  };

  this.peek = function () {
    //@ devolve o elemento que está no topo da pilha
  };

  this.isEmpty = function () {
    //@ informa se a pilha está vazia ou não
  };

  this.clear = function () {
    //@ Limpa a pilha
  };

  this.size = function () {
    //@ informa o tamanho da pilha
  };

  this.isEmpty = function () {
    //@ imprime a pilha no console
  };
}
