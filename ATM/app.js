let blance = 8000000;
let withdraw = +prompt("مبلغ برداشتی خود را وارد کنید");
let fee;
if (withdraw <= 0) {
  console.log("مبلغ برداشتی باید بیشتر از 0 باشد");
} else if (withdraw > blance) {
  console.log("موجودی کافی نیست");
} else if (withdraw % 10000 !== 0) {
  console.log("مبلغ باید مضربی از 10,000 باشد");
} else {
  fee = (withdraw * 6) / 100;
  if (withdraw + fee > blance) {
    console.log("موجودی برای برداشت به همراه کارمزد کافی نیست");
  } else {
    if (withdraw >= 5000000) {
      console.log("هشدار: مبلغ برداشت بالا است");
    }
    blance = blance - withdraw - fee;
    console.log(
      "مبلغ درخواستی برای برداشت :" +
        withdraw +
        "\n" +
        "موجودی شما بعد از برداشت : " +
        blance,
    );
  }
}
