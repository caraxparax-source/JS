let stand = +prompt("تعداد شب های اقامت خود را وارد کنید");
if (stand <= 0) {
  console.log("مدت اقامت صحیح نمیباشد");
} else {
  let room = +prompt(
    "نوع اتق خود را اتخاب کنید.(1 → اتاق معمولی،  2 → اتاق لوکس،3 → سوئیت، شبی)",
  );
  let price;
  if (room > 3 || room <= 0) {
    console.log("نوع اتاق معتبر نیست");
  } else {
    let vip = prompt("ایا عضو vip هستید (بله / خیر)");
    let brackfast = prompt("ایا صبحانه میخواهید (بله / خیر)");
    if (room == 1) {
      price = stand * 800000;
    } else if (room == 2) {
      price = stand * 1500000;
    } else if (room == 3) {
      price = stand * 2500000;
    }
    console.log("قیمت اقامت در اتاق شما: " + price);

    if (stand >= 7) {
      let discount = (price * 10) / 100;
      price = price - discount;
      console.log("تخفیف برای اقامت بیشتر از 6شب" + discount);
    }

    if (vip == "بله") {
      let vipDiscount = (price * 15) / 100;
      price = price - vipDiscount;
      console.log("تخفیف vip: " + vipDiscount);
    }
    if (brackfast == "بله" && stand < 5) {
      let brackfastPrice = 150000 * stand;
      price = price + brackfastPrice;
      console.log("هزینه صبحانه شما :" + brackfastPrice);
    }
    console.log("هزینه کل اقامت شما :" + price);
  }
}
