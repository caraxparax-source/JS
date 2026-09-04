let count = +prompt("عدد خود را وارد کنید");
let totalOdd = 0;
let totalEven = 0;

function checkNumbers(counter) {
  for (let i = 1; i <= counter; i++) {
    if (i % 2 == 0) {
      totalEven += i;
      console.log("زوج  " + i);
    } else {
      totalOdd += i;
      console.log("فرد  " + i);
    }
  }
}
checkNumbers(count);
console.log("جمع کل عداد فرد : " + totalOdd);
console.log("جمع کل اعداد زوج : " + totalEven);
