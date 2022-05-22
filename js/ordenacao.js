function ArrayList() {
  let array = [];

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
      if (i !== indexMin) {
        swap(array, i, indexMin);
      }
    }
  };

  this.insertionSort = () => {
    let j, temp;

    for (let i = 1; i < array.length; i++) {
      j = i;
      temp = array[i];

      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  this.mergeSort = () => {
    array = mergeSortRec(array);
  };

  const mergeSortRec = (array) => {
    let length = array.length;

    if (length === 1) {
      return array;
    }

    let mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  const merge = (left, right) => {
    const result = [];
    let il = 0,
      ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }

    return result;
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
al.insert(3);
al.insert(2);
al.insert(1);
console.log(al.toString());

// al.bubbleSort();

// al.selectionSort();

// al.insertionSort();

al.mergeSort();

console.log(al.toString());
