let count = +prompt("تعداد محصول خود را وارد کنید");
if (count <= 0) {
  console.log("عدد معتیر نیست");
} else {
  let total = 0;
  let discount = 0;
  for (let i = 0; i < count; i++) {
    let price = +prompt("قیمت کالا را وارد کنید");
    if (price <= 0) {
      console.log("قیمت وارد شده معتبر نیست");
    } else {
      console.log("قیمت  کالا : " + price);
      total = price + total;
    }
  }
  if (total > 5000000) {
    discount = (total * 15) / 100;
    total -= discount;
    console.log("میزان تخفیف برای خرید بالا:5تومن : " + discount);
    console.log("مبلغ کل خرید: " + total);
  } else if (total <= 5000000 && total > 2000000) {
    discount = (total * 10) / 100;
    total -= discount;
    console.log("میزان تخفیف برای خرید بالا2تومن : " + discount);
    console.log("مبلغ کل خرید: " + total);
  } else if (total <= 2000000 && total >= 500000) {
    discount = (total * 5) / 100;
    total -= discount;
    console.log("میزان تخفیف برای خرید بالا 500 تومن : " + discount);
    console.log("مبلغ کل خرید: " + total);
  } else if (total > 0) {
    console.log("مبلغ کل خرید: " + total);
  } else {
    console.log("هیچ کالای معتبری وارد نشد");
  }
  console.log("میزان کل تخفیف: " + discount);
}
