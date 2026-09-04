let num1 = +prompt("عدد اول را وارد کنید");
let num2 = +prompt("عدد دوم را وارد کنید");
let num3 = +prompt("عدد سوم را وارد کنید");
let highNum;
let midNum;
let lowNum;
if (num1 == num2 || num2 == num3 || num3 == num1) {
  console.log("عدد ها نمیتوانند مقدار یکسان داشته باشند");
} else {
  if (num1 > num2 && num1 > num3) {
    highNum = num1;
  } else if (num2 > num1 && num2 > num3) {
    highNum = num2;
  } else {
    highNum = num3;
  }
  if ((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)) {
    midNum = num1;
  } else if ((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)) {
    midNum = num2;
  } else {
    midNum = num3;
  }
  if (num1 < num2 && num1 < num3) {
    lowNum = num1;
  } else if (num2 < num1 && num2 < num3) {
    lowNum = num2;
  } else {
    lowNum = num3;
  }
  console.log(
    "بیشترین عدد : " +
      highNum +
      "\n" +
      "عدد میانی : " +
      midNum +
      "\n" +
      "کمترین عدد : " +
      lowNum,
  );
}
// if (num1 == num2 || num2 == num3 || num3 == num1) {
//   console.log("عدد ها نمیتوانند مقدار یکسان داشته باشند");
// } else {
//   highNum =
//     num1 > num2 && num1 > num3
//       ? num1
//       : num2 > num1 && num2 > num3
//         ? num2
//         : num3;
//   lowNum =
//     num1 < num2 && num1 < num3
//       ? num1
//       : num2 < num1 && num2 < num3
//         ? num2
//         : num3;
//   midNum =
//     (num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)
//       ? num1
//       : (num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)
//         ? num2
//         : num3;
//   console.log(
//     "بیشترین عدد : " +
//       highNum +
//       "\n" +
//       "عدد میانی : " +
//       midNum +
//       "\n" +
//       "کمترین عدد : " +
//       lowNum,
//   );
// }
