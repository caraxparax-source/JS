let customers = +prompt("تعداد مشتری های خودرا وارد کنید");
function shop(count) {
  let totalPrice = 0;
  let totalDiscounts = 0;
  for (let i = 0; i < count; i++) {
    let price;
    let total = 0;
    let discount = 0;
    price = +prompt("مبلغ خزید خود را وارد کنید");
    if (price > 5000000) {
      discount = (price * 15) / 100;
    } else if (price > 3000000) {
      discount = (price * 10) / 100;
    } else if (price > 1000000) {
      discount = (price * 5) / 100;
    }
    total = price - discount;
    totalPrice += total;
    totalDiscounts += discount;
    console.log("مبلغ خرید:  " + price);
    console.log("مقدار تخفیف:  " + discount);
    console.log("مبلغ نهایی:  " + total);
  }
  return (
    "قیمت خرید کل مشتری ها: " +
    totalPrice +
    "\n" +
    "تخفیف کلی: " +
    totalDiscounts
  );
}
let payment = shop(customers);
console.log(payment);
