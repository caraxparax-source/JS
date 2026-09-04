let height = +prompt("قد خود را وارد کنید.(به سانتی متر)");
let weight = +prompt("وزن خود را وارد کنید.(به کیلوگرم)");
height = height / 100;
const bmi = weight / (height * height);

let message =
  bmi <= 18.5
    ? "کبود وزن"
    : bmi <= 24.5
      ? "وزن سلامت"
      : bmi <= 30
        ? "اضافه وزن"
        : "چاقی";
console.log("Your BMI: " + bmi + "\n" + message);
