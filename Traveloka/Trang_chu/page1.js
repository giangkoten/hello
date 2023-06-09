$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

//Đăng ký
let btnSignIn = document.querySelector(".btn-signIn");
btnSignIn.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/Sign_in/sign_in.html";
});
//Hiện thông báo lỗi
let errLogin = document.querySelector(".errLogin");
//Đăng nhập
let btnLogIn = document.querySelector(".btnLogIn");
let overLay = document.querySelector(".overLay");
//Thẻ đăng nhập
btnLogIn.addEventListener("click", function () {
  overLay.style.display = "block";
});
window.addEventListener("click", function (e) {
  if (e.target === overLay) {
    overLay.style.display = "none";
  }
});
//Thực hiện đăng nhập
let usermail = document.querySelector("#usermail");
let password = document.querySelector("#password");
let btnCorrect = document.querySelector("#btnCorrect");
let formlogin = document.querySelector(".formlogin");
let userName = document.querySelector(".userName");
let blockoverLay = document.querySelector(".blockoverLay");

let dataUser = JSON.parse(localStorage.getItem("users"));

let checkuser = false;
let currentUser = [];
formlogin.addEventListener("submit", function (e) {
  e.preventDefault();
  let emailValue = usermail.value;
  let passwordValue = password.value;
  let foundUser = false;

  dataUser.forEach(function (user) {
    if (emailValue == "admin" && passwordValue == 1999) {
      window.location.href = "http://127.0.0.1:5500/Admin/admin.html";
    } else if (user.email === emailValue && user.password === passwordValue) {
      userName.innerHTML = emailValue;
      overLay.style.display = "none";
      foundUser = true;
      currentUser[0] = user;
      currentUser[0].isLogIn = true;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    //khóa tài khoản
    if (emailValue == user.email && user.block == true) {
      blockoverLay.style.display = "block";
    }
  });

  if (!foundUser) {
    errLogin.style.display = "block";
  }
});
//Đăng xuất
let btnSignOut = document.querySelector(".btn-signOut");
btnSignOut.addEventListener("click", function () {
  console.log("hello");
  window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
});

//Điều hướng trang chủ đến Nha Trang
let btnnNhaTrang = document.querySelector(".btnn");
btnnNhaTrang.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/Page_2/page2.html";
});

//Admin
