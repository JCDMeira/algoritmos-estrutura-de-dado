function BinarySearchTree() {
  const Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = (key) => {
    //@ insere uma chave
    const newNode = new Node(key);
    if (root === nul) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const insertNode = (root, newNode) => {
    if (NewNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
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
