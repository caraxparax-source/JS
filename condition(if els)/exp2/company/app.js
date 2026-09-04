let worker = +prompt("تعداد کارمندان خود را وارد کنید");
function payment(count) {
  let totalPayment = 0;
  let totalTax = 0;
  let totalReward = 0;
  for (let i = 0; i < count; i++) {
    let wage = +prompt("حقوق ماهانه را وارد کنید");
    let exp = +prompt("سال‌های سابقه کار را وارد کنید");
    let tax = 0;
    let total = wage;
    let reward = 500000;
    if (wage > 30000000) {
      tax = (wage * 10) / 100;
    } else if (wage > 20000000) {
      tax = (wage * 5) / 100;
    }
    if (exp >= 10) {
      reward = 3000000;
    } else if (exp >= 5) {
      reward = 2000000;
    }
    total += reward;
    total -= tax;
    totalPayment += total;
    totalTax += tax;
    totalReward += reward;
    console.log("حقوق اولیه :" + wage);
    console.log("مالیات: " + tax);
    console.log("پاداش: " + reward);
    console.log("حقوق نهایی: " + total);
  }
  return (
    "مجموع حقوق پرداختی: " +
    totalPayment +
    "\n" +
    "مجموع مالیات:" +
    totalTax +
    "\n" +
    "مجموع پاداش: " +
    totalReward
  );
}
let result = payment(worker);
console.log(result);
