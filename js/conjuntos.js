//* sets

function Set() {
  let items = {};

  this.add = (value) => {
    //@ adiciona um novo item ao conjunto
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = (value) => {
    //@ remove um item ao conjunto
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.has = (value) => {
    //@ devolve se o valor existe ou não
    return items.hasOwnProperty(value);
  };

  this.clear = (value) => {
    //@ remove todos os itens do conjunto
    items = {};
  };

  this.size = (value) => {
    //@ retorna o tamanho do conjunto
    return Object.keys(items).length;
  };

  this.values = (value) => {
    //@ retorna um array com todos os valores do conjunto
    const values = [];
    const keys = Object.keys(items);

    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.union = (otherSet) => {
    let unionSet = new Set(),
      values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  this.intersection = (otherSet) => {
    let intersectionSet = new Set(),
      values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  this.difference = (otherSet) => {
    let differenceSet = new Set(),
      values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };

  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();

      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(6);
set.add(8);

console.log("set size", set.size());
console.log("set", set.values());

const set2 = new Set();
set2.add(1);
set2.add(10);
set2.add(5);
set2.add(4);
set2.add(6);
set2.add(7);
set2.add(8);
set2.add(20);
set2.add(30);
set2.add(40);

const setUnion = set.union(set2);
console.log("setUnion | set U set2 |", setUnion.values());

const intersectionSet = set.intersection(set2);
console.log("intersectionSet | set n set2 |", intersectionSet.values());

const differenceSet = set.difference(set2);
console.log("differenceSet | set - set2 |", differenceSet.values());

const differenceSet2 = set2.difference(set);
console.log("differenceSet2 | set2 - set |", differenceSet2.values());

const set3 = new Set();

set3.add(1);
set3.add(2);
set3.add(3);

console.log("set3 is a subset of set:", set3.subset(set));
console.log("set2 is a subset of set:", set2.subset(set));
