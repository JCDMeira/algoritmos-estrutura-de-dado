function ArrayList() {
  const array = [];

  this.insert = (item) => {
    array.push(item);
  };

  this.toString = () => {
    return array.join();
  };

  this.bubbleSort = () => {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };

  this.selectionSort = () => {
    let indexMin;

    for (let i = 0; i < array.length - 1; i++) {
      indexMin = i;
      for (let j = i; j < array.length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if(i !== indexMin{
        swap(array, i, indexMin)
      }
    }
  };

  const swap = (array, index1, index2) => {
    let aux = array[index1];

    array[index1] = array[index2];
    array[index2] = aux;
  };
}

const al = new ArrayList();

al.insert(5);
al.insert(4);
al.insert(5);
al.insert(2);
al.insert(1);
console.log(al.toString());

// al.bubbleSort();
// console.log(al.toString());

// al.bubbleSort();
// console.log(al.toString());
