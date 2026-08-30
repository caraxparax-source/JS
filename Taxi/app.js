let distence = +prompt("مسافت خود را به کیلومتر وارد کنید");
if (distence <= 0) {
  console.log("عدد وارد شده صحیح نیست");
} else {
  let time = +prompt("ساعت حرکت خود را وارد کنید");
  if (time < 0 || time > 24) {
    console.log("ساعت معتبر نیست");
  } else {
    let baseFee = 50000;
    let tripPrice = distence * 15000 + baseFee;
    if (distence > 20) {
      let discount = (tripPrice * 10) / 100;
      tripPrice = tripPrice - discount;
    }
    if (time >= 22 || time < 6) {
      let nightFee = (tripPrice * 20) / 100;
      tripPrice = nightFee + tripPrice;
      console.log("افزایش قیمت شبانه: " + nightFee);
    }
    let day = prompt("ایا امروز تعطیل است یا خیر؟");
    if (day == "بله" || day == "yes") {
      let holidayFee = (tripPrice * 15) / 100;
      tripPrice = holidayFee + tripPrice;
      console.log("افزایش قیمت تعطیلات: " + holidayFee);
    }
    console.log(
      "مسافت: " +
        distence +
        "\n" +
        "قیمت پایه : " +
        baseFee +
        "\n" +
        "قیمت کل سفر :" +
        tripPrice,
    );
  }
}
