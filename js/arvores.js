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
    return searchNode(root, key);
  };

  const searchNode = (node, key) => {
    if (node === null) {
      return false;
    } else if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  this.remove = (key) => {
    //@ remove uma chave
    root = removeNode(root, key);
  };

  const removeNode = (node, key) => {
    if (node === null) {
      return null;
    } else if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let aux = findMinNode(node.right);

      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  this.min = () => {
    //@ retorna a menor chave
    return minNode(root);
  };

  const minNode = (node) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  const findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  this.max = () => {
    //@ retorna a maior chave
    return maxNode(root);
  };

  const maxNode = (node) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
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
