// let hellow = 'Hellow';
// let world = 'World';

// alert(hellow + world);

// alert(4 + 3);
// alert(8 - 5);
// alert(2 * 6);
// alert(10 / 2);

// let orange = 100;
// let apple = 120;

// if (orange < apple) {
//   alert('みかんの値段がリンゴより安い');
// } else if (orange == apple) {
//   alert('みかんの値段とりんごの値段が等しい');
// } else {
//   alert('みかんの値段がリンゴより高い');
// };


// let max = 100;
// let num = 1;
// let count = 0;

// while (num < max) {
//   num = num * 2;
//   count = count + 1
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// let i;
// let num = 0;

// for (i = 1; i < 11; i++) {
//   num = num + i;
// };

// alert('1から10まで足し算した結果は' + num + 'です');

// const nicknam = 'イチロー';
// console.log(nicknam);

// const nicknam = 'タロー';
// console.log(nicknam);
// let nicknam = 'イチロー';
// console.log(nicknam);
// nicknam = 'ジロー';
// console.log(nicknam);


// var str = "webcamp";//グローバルスコープ

// function foo() {
//   console.log(str);
//   var y = "hello";//関数スコープ
// };

// foo();
// console.log(y);


// function foo() {
//   let x = "webcamp";
//   {
//     let y = "hello webcamp";
//     console.log(y);
//   };

//   console.log(x);
// };

// foo();

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// };
// console.log(i);


var str = "webcamp";

function foo() {
  console.log(str);
  var str = "dmm webcamp";
  console.log(str);
};

foo();
