let price = +prompt("قیمت محصول را وارد کنید");
let tax;
let prodcutPrice;
function priceCheker(product) {
  let total;
  tax = (price * 9) / 100;
  prodcutPrice = product + tax;
  total = prodcutPrice;
  if (prodcutPrice < 1000000) {
    total = prodcutPrice + 500000;
  } else if (prodcutPrice <= 5000000) {
    total = prodcutPrice + 200000;
  }
  return "قیمت کل" + total;
}
let result = priceCheker(price);
console.log(result);
console.log("قیمت وارد شده: " + price);
console.log("مالیات: " + tax);
console.log("قیمت به اضافه مالیات: " + prodcutPrice);
