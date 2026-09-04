let age = +prompt("سن خودرا وارد کنید");
if (age < 18) {
  console.log("برا کسب وام باید بالا 18 سال باشید");
} else {
  let income = +prompt("درآمد ماهانه خود را وارد کنید");

  if (income <= 5000000) {
    console.log("برای کسب وام باید حداقل 5میلیون تومان درامد داشته باشید");
  } else {
    let cheack = prompt("ایا چک برگشتی دارید؟  (بله/خیر)");
    if (cheack == "بله") {
      console.log("برای دریافت وام نباید چک برگشتی داشته باشید");
    } else {
      let loan = +prompt("مبلغ درخواستی خود را به تومان وارد کنید");
      if (loan > income * 10) {
        console.log("شما توانایی باز پرداخت این وام را ندارید");
      } else {
        let interestRate;
        let repayment;
        if (income > 20000000) {
          interestRate = (loan * 12) / 100;
          repayment = loan + interestRate;
        } else {
          interestRate = (loan * 18) / 100;
          repayment = loan + interestRate;
        }
        console.log(
          "مبلغ کل باز پرداخت: " +
            repayment +
            "\n" +
            "مقدار مبلغ درخواستی: " +
            loan,
        );
      }
    }
  }
}
