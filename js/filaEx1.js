function Queue() {
  let items = [];

  this.enqueue = (element) => {
    items.push(element);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.front = () => {
    return items[0];
  };

  this.isEmpty = () => {
    return items.length === 0;
  };

  this.size = () => {
    return items.length;
  };

  this.print = () => {
    console.log(items.toString());
  };
}

function hotPotato(nameList, num) {
  const queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + " was eliminated from Hot Potato Game");
  }

  return queue.dequeue();
}

let names = ["João", "José", "Maria", "Ana", "Lucas"];
let winner = hotPotato(names, 7);
console.log("The winner is: " + winner);
