// let avgTemp = [];
//
// avgTemp[0] = 31.9;
// avgTemp[1] = 35.3;
// avgTemp[2] = 42;
// avgTemp[3] = 38;
// avgTemp[4] = 25.5;

// console.log(avgTemp[3]);

// let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//
// for (let i = 0; i < daysOfWeek.length; i++) {
//   console.log(daysOfWeek[i]);
// }
//
// console.log('---------------------');
//
// daysOfWeek.forEach(function(item) {
// console.log(item);
// });
//
// console.log('---------------------');
//
// for (day of daysOfWeek) {
  // console.log(day);
// }
//
// console.log('---------------------');
//
// let fibonacci = [0,1,1];
//
// for (let i = 3; i < 20 ; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// console.log(fibonacci);

// for (item of fibonacci) {
  // console.log(item);
// }


// let numbers = [0,1,2,3,4,5,6,7,8,9];

// numbers[numbers.length] = 10;
// numbers[numbers.length] = 11;
//
// numbers.push(12);
// numbers.push(13);
// numbers.push(14);
// numbers.push(15);
// numbers.push(16);
//
// numbers.unshift(-1);
// numbers.unshift(-2);
// numbers.unshift(-3);
// numbers.unshift(-4);


// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
//
// numbers.shift();
// numbers.shift();
// numbers.shift();
// numbers.shift();

// no splice o primeiro parâmetro é exclusivo, ou seja: a partir do 3 elemento
// ou seja, no comando abaixo, a partir da 3ª posição do array
// a partir do terceiro item, exclua 3 itens do array
// numbers.splice(3,3);
//
// console.log(numbers);
//
// let numbersToAdd = [3,4,5];

//inserir elementos com o splice da mesma maneira
// a partir da 3ª posição do array, '0' sem excluir nenhum elemento, insira os numeros, 3,4 e 5

// usei o spread operator (...) para retirar os itens de dentro do array que havia estabelecido em numbersToAdd
// numbers.splice(3, 0, ...numbersToAdd);

// console.log(numbers);

let avgTempWeek = [];

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

for (let i = 0; i < avgTempWeek.length; i++) {
  for (let j = 0; j < avgTempWeek[i].length; j++) {
    console.log('for i: ', avgTempWeek[i][j]);
  }
}

for (itens of avgTempWeek) {
  for (item of itens) {
    console.log('item: ', item);
  }
}

avgTempWeek.forEach(itens => {
  itens.forEach(item => {
    console.log('forEach: ', item);
  })
});


