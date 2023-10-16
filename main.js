// function oddNum(n) {
//   let count = 0,
//     d;

//   while (n != 0) {
//     d = parseInt(n % 10);
//     if (d % 2 != 0) {
//       count += 1;
//     }
//     n = parseInt(n / 10);
//   }
//   if (count == 0) {
//     console.log("there is no odd numbers");
//   } else {
//     console.log(count, "numbers");
//   }
// }
// oddNum(154);

// function multiply() {
//   for (let i = 1; i < 3; i++) {
//     for (j = 1; j <= 10; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }

//   //   for (let i = 2; i < 3; i++) {
//   //     for (j = 1; j <= 10; j++) {
//   //       console.log(`${i} * ${j} = ${i * j}`);
//   //     }
//   //   }
// }
// multiply();

// function stars(n) {
//   str = "*";
//   for (i = 0; i <= n; i++) {
//     str = "";
//     for (j = 1; j <= i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// stars(5);

// for (i = 0; i < 5; i += 2) {
//   console.log(i);
// }

// let str = "incodeuz";
// let res = "";
// let i = 0;
// let j = 0;

// for (i = 0; i < str.length; i++) {
//   for (j = 0; j < 1; j++) {
//     res += str[i];
//   }
//   console.log(res);
// }

// while (i < str.length) {
//   res += str[i];
//   i++;
//   console.log(res);
// }
