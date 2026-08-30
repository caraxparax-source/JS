let blance = 2000000;
let price = +prompt("قیمت محصول را وارد کنید");
let discount = prompt("کد تخفیف را وارد کنید");
let tax = (price * 9) / 100;
let afterTax = price + tax;
let cashBack;
let productDis = 0;
let productPrice;
let diff;
if (afterTax < 2000000) {
  productPrice = afterTax + 500;
  console.log("هزینه ارسال : 500");
} else {
  productPrice = afterTax;
}
if (discount == "gift") {
  productDis = (productPrice * 20) / 100;
  productPrice = productPrice - productDis;
} else if (discount == "") {
  console.log("کد تخفیف وارد نشده است");
} else {
  console.log("کد تخفیف معتبر نیست");
}
if (productPrice > blance) {
  diff = productPrice - blance;
  console.log(
    "موجودی کیف پول کافی نیست" +
      "\n" +
      "مبلغ :" +
      diff +
      " به کیف پول واریز شود ",
  );
} else {
  blance = blance - productPrice;
  cashBack = (productPrice * 10) / 100;
  blance = cashBack + blance;
  console.log(
    "قیمت وارد شده :" +
      price +
      "\n" +
      "قیمت بعد از مالیات :" +
      afterTax +
      "\n" +
      "قیمت نهایی محصول :" +
      productPrice +
      "\n" +
      "مقدار تخفیف :" +
      productDis +
      "\n" +
      "پول برگشتی :" +
      cashBack +
      "\n" +
      "کیف پول بعد از بازگشت وجه: " +
      blance,
  );
}
