let counter = +prompt("تعداد کارمند های خود را وارد کنید");
function pay(counter) {
  let payment = 0;
  let wage;
  for (let i = 0; i < counter; i++) {
    wage = +prompt("حقوق کارمند خود را وارد کنید");
    let tax = 0;
    if (wage > 30000000) {
      tax = (wage * 10) / 100;
      console.log("حقوق قبل از کسر مالیات " + wage);
    } else if (wage >= 20000000) {
      tax = (wage * 5) / 100;
      console.log("حقوق قبل از کسر مالیات " + wage);
    }
    wage -= tax;
    payment += wage;
    console.log("حقوق نهایی :" + wage);
  }
  return payment;
}
let total = pay(counter);
console.log("حقوق کل کارمندان:  " + total);
