let speed = +prompt("سرعت خودرو");
let belt = prompt("آیا راننده کمربند ایمنی بسته است؟ (بله / خیر)");
let phone = prompt("آیا راننده در حال استفاده از موبایل بوده؟ (بله / خیر)");
let zone = prompt("آیا محل رانندگی منطقه مدرسه است؟ (بله / خیر)");
let ticket = 0;
if (speed > 100) {
  ticket = ticket + 500000;
  console.log("سرعت بیش از 100کیلومتر: " + 500000);
  if (speed > 120) {
    ticket = ticket + 1000000;
    console.log("سرعت بیش از 120کیلومتر: " + 1000000);
  }
}
if (belt == "خیر") {
  ticket = ticket + 300000;
  console.log("نبستن کمربند ایمنی: " + 300000);
}
if (phone == "بله") {
  ticket = ticket + 700000;
  console.log("استفاده از تلفن همراه :" + 700000);
}
if (zone == "بله" && speed > 60) {
  ticket = ticket + 800000;
  console.log("جریمه منطقه مدرسه: " + 800000);
}
if (ticket == 0) {
  console.log("راننده بددون تخلف");
} else {
  console.log("مبلغ کل جریمه: " + ticket);
}
