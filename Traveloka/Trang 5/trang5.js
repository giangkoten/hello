let userName = document.querySelector(".userName");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

userName.innerHTML = currentUser[0].email;

let btnSignOut = document.querySelector(".btn-signOut");
btnSignOut.addEventListener("click", function () {
  currentUser = [];
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
});

//Nội dung
let titleTour = document.querySelector("#title");
let day = document.querySelector("#check-in-date");
let nights = document.querySelector("#number-of-nights");
let adults = document.querySelector("#number-of-adults");
let chills = document.querySelector("#number-of-children");
let money = document.querySelector("#total-money");
let pay = document.querySelector("#pay");

//Lấy thông tin từ local để xử lý
let bookingList = JSON.parse(localStorage.getItem("bookingList"));

let checkCurrentUser = bookingList.filter(function (e) {
  return e.id == currentUser[0].id;
});

//Dùng forEach để in ra
let hisInfor = document.querySelector(".his-info");
hisInfor.innerHTML = "";

checkCurrentUser.forEach(function (element) {
  hisInfor.innerHTML += `
            <div class="form-group">
              <label for="adress">Kỳ nghỉ:</label>
              <span id="title">${element.title}</span>
            </div>
            <div class="form-group">
              <label for="check-in-date">Ngày vào khách sạn:</label>
              <span id="check-in-date">${element.start}</span>
            </div>
            <div class="form-group">
              <label for="number-of-nights">Số đêm ở khách sạn:</label>
              <span id="number-of-nights">${element.time}</span>
            </div>
            <div class="form-group">
              <label for="number-of-adults">Người lớn:</label>
              <span id="number-of-adults">${element.adult}</span>
            </div>
            <div class="form-group">
              <label for="number-of-children">Trẻ nhỏ:</label>
              <span id="number-of-children">${element.child}</span>
            </div>
            <div class="form-group">
              <label for="number-of-children">Tổng tiền:</label>
              <span id="total-money">${element.total}</span>
            </div>
            <div class="form-group">
              <label for="Pay">Thanh toán</label>
              <span id="pay">${element.isPay}</span>
            </div>
            <hr>
  `;
});

//Quay lại trang chủ
let cBar = document.querySelectorAll(".cBar");
cBar.forEach(function (e) {
  e.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
  });
});
