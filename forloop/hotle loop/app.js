// let nights = +prompt("مدت اقامت خود را وارد کنید");
// if (nights <= 0) {
//   console.log("عدد وارد شده سحیح نبست");
// } else {
//   let baseFee = 1000000;
//   let total = 0;
//   for (let i = 0; i < nights; i++) {
//     let priceTonight;
//     if ((i + 1) % 2 == 0) {
//       let discount = (baseFee * 5) / 100;
//       total = baseFee + total - discount;
//       priceTonight = baseFee - discount;
//       console.log("قیمت هرشب: " + priceTonight);
//     } else {
//       total = baseFee + total;
//       priceTonight = baseFee;
//       console.log("قیمت هرشب: " + priceTonight);
//     }
//   }
//   console.log("مبلع کل اقامت: " + total);
// }
let product = +prompt("تعداد محصول را وارد کنید");
if (product <= 0) {
  console.log("عدد اشتباه است");
} else {
  let price = 0;
  let total = 0;
  let avragePrice = 0;

  for (let i = 0; i < product; i++) {
    price = +prompt("قیمت محصول را وارد کنید");
    total = price + total;
    console.log("قیمت هر محصول  : " + price);
  }
  avragePrice = total / product;
  console.log("قیمت کل  :" + total);
  console.log("قیمت میانگین  :" + avragePrice);
}
