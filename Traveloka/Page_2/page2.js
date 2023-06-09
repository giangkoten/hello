let userName = document.querySelector(".userName");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

currentUser = currentUser[0].email;
userName.innerHTML = currentUser;

let btnSignOut = document.querySelector(".btn-signOut");
btnSignOut.addEventListener("click", function () {
  currentUser = [];
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
});
// currentUser[0].forEach(function (user) {
//   if (user.email === emailValue && user.password === passwordValue) {
//     userName.innerHTML = emailValue;
//     overLay.style.display = "none";
//     foundUser = true;
//     currentUser[0] = user;
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));
//   }
// });

//Admin thêm sản phẩm
// B1: Tạo mảng lưu các thông tin về tour
// let tours = [
//   {
//     img: "https://r-xx.bstatic.com/xdata/images/xphoto/300x320/129684001.jpg?k=ba9f0295e175c687ba47f920ae7467c06e2ab70021b61367c369dec6eea23fc6&o=",
//     title: "Tour Bà Nà Hill cả ngày với bữa trưa",
//     content: "Khám phá Bà Nà Hill với hướng dẫn viên chuyên nghiệp.",
//   },
//   {
//     img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x320/130075674.jpg?k=739397298f9d93d564e4185ebfbdc542df1ab91a1a6efb6f107ef46bf897697d&o=",
//     title: "Tour Ngũ Hành Sơn và Hội An",
//     content:
//       "Sự kết hợp hoàn hảo giữa thiên nhiên và lịch sử tại hai địa điểm tham quan tuyệt đẹp, bao gồm bữa tối.",
//   },
//   {
//     img: "https://r-xx.bstatic.com/xdata/images/xphoto/300x320/153569836.jpg?k=78d6ed82d23cf47d5f2cd1f5a886139f77040a583e9b7f0a0bf6cb30c2011ee1&o=",
//     title: "Tour thánh địa Mỹ Sơn và đi thuyền trên sông Thu Bồn",
//     content:
//       "Đi từ Hội An hướng dẫn viên để tìm hiểu về văn hóa và lịch sử Việt Nam.",
//   },
// ];
//B2: Lưu mảng vào localStorage

// localStorage.setItem("tours", JSON.stringify(tours));

//B3 lấy thông tin từ localStorage
let toursList = JSON.parse(localStorage.getItem("tours"));

let productList = "";
productList = document.querySelector(".card-list");

//B4: Thêm sản phẩm bằng vòng lặp foreach
toursList.forEach(function (product) {
  productList.innerHTML += `<li class="card-item">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${product.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.content}</p>
        <span><i class="fa-regular fa-star"></i>4.5 / 5(29 đánh giá)</span>
        <button class="btnSelect">Đặt hàng</button>
      </div>
    </div>
  </div>
</li>`;
});

let btnSelect = document.querySelectorAll(".btnSelect");
btnSelect.forEach(function (button) {
  button.addEventListener("click", function () {
    let parentElement = button.parentElement;
    let titleElement = parentElement.querySelector(".card-title");
    let title = titleElement.innerText;
    localStorage.setItem("bookingInfo", JSON.stringify(title));

    window.location.href = "http://127.0.0.1:5500/Page%203/page3.html";
  });
});
// renderProductList();

//Quay lại trang chủ
let cBar = document.querySelectorAll(".cBar");
cBar.forEach(function (e) {
  e.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
  });
});
