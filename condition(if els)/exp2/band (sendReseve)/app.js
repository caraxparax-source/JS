let balance = +prompt("موجودی خود را وارد کنید");
let count = +prompt("تعداد تراکنش های خود را وارد کنید");
function bank(trans) {
  let deposit = 0;
  let whitdraw = 0;
  let totalDeposit = 0;
  let totalwhitdraw = 0;
  for (let i = 0; i < trans; i++) {
    let transactions = +prompt(
      "(عملیات مورد نظر خود را وارد کنید(1واریز/ 2برداشت",
    );
    if (transactions == 1) {
      deposit = +prompt("مبلغ واریزی خود را وارد کنید");
      balance += deposit;
      totalDeposit += deposit;
    } else if (transactions == 2) {
      whitdraw = +prompt("مبلغ برداشتی خود را وارد کنید");
      if (balance >= whitdraw) {
        balance -= whitdraw;
        totalwhitdraw += whitdraw;
      } else {
        console.log("موجودی کافی نیست");
      }
    } else {
      console.log("عدد وارد شده صحیح نیست");
    }
  }
  console.log("مجموع واریزی ها" + totalDeposit);
  console.log("مجموع برداشتی ها" + totalwhitdraw);
  return balance;
}
console.log("موجودی اولیه: " + balance);
let result = bank(count);
console.log("موجودی نهایی" + result);
