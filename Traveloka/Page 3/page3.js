//Đăng xuất
let userName = document.querySelector(".userName");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

userName.innerHTML = currentUser[0].email;

let btnSignOut = document.querySelector(".btn-signOut");
btnSignOut.addEventListener("click", function () {
  currentUser = [];
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
});

let form = document.querySelector(".form");
let btnSum = document.querySelector(".btnSum");
let time = document.querySelector(".time");
let adult = document.querySelector(".adult");
let child = document.querySelector(".child");
let totalAll = document.querySelector(".total");
let confirm = document.querySelector(".confirm");
let error = document.querySelector(".error");
let start = document.querySelector(".start");
let btnCheck = document.querySelector(".btnCheck");

let orderList = JSON.parse(localStorage.getItem("bookingList")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let timeCount = time.value;
  let adultCount = adult.value;
  let childCount = child.value;
  let startCount = start.value;

  //Tính tiền
  let total = 0;
  if (timeCount <= 0 || adultCount <= 0 || childCount < 0) {
    error.style.display = "block";
  } else if (timeCount > 0 && adultCount > 0 && childCount >= 0) {
    total = timeCount * 200 + adultCount * 50 + childCount * 25;
    error.style.display = "none";

    // Hiển thị tổng tiền
    totalAll.innerHTML = "$" + total;
    btnSum.style.display = "none";
    btnCheck.style.display = "block";
  }
  let titleBookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

  //Lưu vào localStorage
  let updatebookingInfo = {
    start: startCount,
    time: timeCount,
    adult: adultCount,
    child: childCount,
    total: total,
    id: currentUser[0].id,
    title: titleBookingInfo,
    isPay: false,
    idOder: Math.floor(Math.random() * 100000 + 1),
  };
  orderList.push(updatebookingInfo);
  localStorage.setItem("bookingList", JSON.stringify(orderList));
});
// Chuyển đến trang tiếp theo
btnCheck.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5500/Page%204/page4.html";
});

//Quay lại trang chủ
let cBar = document.querySelectorAll(".cBar");
cBar.forEach(function (e) {
  e.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
  });
});
