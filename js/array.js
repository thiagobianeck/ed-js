// let avgTemp = [];
//
// avgTemp[0] = 31.9;
// avgTemp[1] = 35.3;
// avgTemp[2] = 42;
// avgTemp[3] = 38;
// avgTemp[4] = 25.5;

// console.log(avgTemp[3]);

let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

console.log('---------------------');

daysOfWeek.forEach(function(item) {
  // console.log(item);
});

console.log('---------------------');

for (day of daysOfWeek) {
  // console.log(day);
}

console.log('---------------------');

let fibonacci = [0,1,1];

for (let i = 3; i < 20 ; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// console.log(fibonacci);

for (item of fibonacci) {
  console.log(item);
}




