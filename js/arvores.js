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
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
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

  const findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
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

  this.inOrderTraverse = (callback) => {
    //@ visita todos os nós da árvore usando um percurso em ordem
    inOrderTraverseNode(root, callback);
  };

  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = (callback) => {
    //@ visita todos os nós da árvore usando um precurso pré ordem
    preOrderTraverseNode(root, callback);
  };

  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.postOrderTraverse = (callback) => {
    //@ visita todos os nós da árvore usando um percurso pós ordem
    postOrderTraverseNode(root, callback);
  };

  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
}
function printNode(value) {
  console.log(value);
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log(tree.search(6));
console.log(tree.search(16));

console.log(tree.min());
console.log(tree.max());

console.log("---------------------------");

tree.inOrderTraverse(printNode);
