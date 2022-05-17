function BinarySearchTree() {
  const Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = (key) => {
    //@ insere uma chave
  };

  this.search = (key) => {
    //@ busca uma chave
  };

  this.remove = (key) => {
    //@ remove uma chave
  };

  this.min = () => {
    //@ retorna a menor chave
  };

  this.max = () => {
    //@ retorna a maior chave
  };

  this.inOrderTraverse = () => {
    //@ visita todos os nós da árvore usando um percurso em ordem
  };

  this.preOrderTraverse = () => {
    //@ visita todos os nós da árvore usando um precurso pré ordem
  };

  this.postOrderTraverse = () => {
    //@ visita todos os nós da árvore usando um percurso pós ordem
  };
}
