let count = +prompt("چند واحد دارید؟");
if (count <= 0) {
  console.log("عدد معتبر نیست");
} else {
  let totalBill = 0;

  for (let i = 0; i < count; i++) {
    let usage = +prompt("مصرف این واحد به کیلووات را وارد کنید");
    if (usage <= 0) {
      console.log("مصرف وارد شده معتبر نیست");
    } else {
      let bill;
      if (usage > 300) {
        let step1 = 100 * 500;
        let step2 = 200 * 800;
        let step3 = (usage - 300) * 1500;
        bill = step1 + step2 + step3;
      } else if (usage > 100) {
        let step1 = 100 * 500;
        let step2 = (usage - 100) * 800;
        bill = step1 + step2;
      } else {
        bill = usage * 500;
      }
      console.log("قبض این واحد: " + bill);
      totalBill += bill;
    }
  }
  console.log("جمع کل قبض همه واحدها: " + totalBill);

  if (totalBill > 5000000) {
    console.log("لطفاً نسبت به بهینه‌سازی مصرف اقدام کنید");
  }
}
