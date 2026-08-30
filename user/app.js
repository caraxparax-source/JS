let user = prompt("نام کاربری خود را وارد کنید");
let password = +prompt("رمز خود را وارد کنید");
let userNames = "admin";
let userPw = 1234;
if (user !== userNames && password !== userPw) {
  console.log("نام کاربری یا رمز عبور اشتباه است");
} else if (user !== userNames && password == userPw) {
  console.log("نام کاربری اشتباه است");
} else if (user == userNames && password !== userPw) {
  console.log("رمز عبور اشتباه است");
} else {
  console.log("ورود موفقیت‌آمیز بود");
}
