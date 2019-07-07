function Stack() {

  let items = [];

  this.push = function (element) {
    // adiciona um novo item à pilha
    items.push(element);
  };

  this.pop = function () {
    // remover o item do topo da pilha
    return items.pop();
  };

  this.peek = function () {
    //devolve o elemento que esta no topo da pilha
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    //informar se a pilha está vazia ou não
    return items.length === 0;
  };


  this.clear = function () {
    // limpa a pilha
    items = [];
  };


  this.size = function () {
    // informar o tamanho da pilha
    return items.length;
  };


  this.print = function () {
    // imprime a pilha no console
    console.log(items.toString());
  }


}

let pilha = new Stack();

pilha.push(2);
pilha.push(4);
pilha.push(6);
pilha.push(8);
pilha.push(10);

console.log(pilha.peek());

// pilha.clear();

// console.log(pilha.isEmpty());

pilha.print();
