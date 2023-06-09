//Quản lý người dùng
let userLogin = JSON.parse(localStorage.getItem("currentUser"));

let tbody = document.querySelector(".tableListuser");
tbody.innerHTML = "";
let listUsers = JSON.parse(localStorage.getItem("users"));
function renderUser() {
  listUsers.forEach(function (element) {
    if (userLogin[0].id == element.id) {
      element.isLogIn = true;
    }
    tbody.innerHTML += `<tr>
        <td>${element.id}</td>
        <td>${element.email}</td>
        <td>${element.password}</td>
        <td>${element.isLogIn}</td>
        <td><button class="btnUnLock" data-id=${element.id}>unlock</button></td>
        <td><button class="btnLock" data-id="${element.id}">lock</button></td>
      </tr>`;
  });
}

renderUser();

//Lock người dùng
let flag = false;
let btnLock = document.querySelectorAll(".btnLock");
btnLock.forEach(function (btn) {
  btn.addEventListener("click", function () {
    listUsers.forEach(function (element) {
      if (element.id == btn.dataset.id) {
        element.block = true;
        flag = true;
      }
    });
    localStorage.setItem("users", JSON.stringify(listUsers));
  });
});
//Unlock người dùng
let flag1 = false;
let btnUnLock = document.querySelectorAll(".btnUnLock");
btnUnLock.forEach(function (btn) {
  btn.addEventListener("click", function () {
    listUsers.forEach(function (element) {
      if (element.id == btn.dataset.id) {
        element.block = false;
        flag1 = true;
      }
    });
    localStorage.setItem("users", JSON.stringify(listUsers));
  });
});

//Quản lý sản phẩm
let purchaseMember = document.querySelector(".purchaseMember");
let bookingList = JSON.parse(localStorage.getItem("bookingList"));
let purchaseBtn = document.querySelectorAll(".purchaseBtn");

function renderPurchase() {
  purchaseMember.innerHTML = "";
  bookingList.forEach(function (element) {
    if (element.isPay == true) {
      purchaseMember.innerHTML += `
    <td>${element.id}</td>
    <td class="oder-id">${element.idOder}</td>
    <td>${element.title}</td>
    <td>${element.start}</td>
    <td>${element.total}</td>
    <td><button class="correctPay">Đã Thanh toán</button></td>
    `;
    } else {
      purchaseMember.innerHTML += `
    <td>${element.id}</td>
    <td class="oder-id">${element.idOder}</td>
    <td>${element.title}</td>
    <td>${element.start}</td>
    <td>${element.total}</td>
    <td><button class="purchaseBtn " data-id=${element.id}>Thanh toán</button></td>
    `;
    }
  });
}

renderPurchase();

purchaseMember.addEventListener("click", function (e) {
  let numberOrder = true;
  if (e.target.classList.contains("purchaseBtn")) {
    // console.log(e.target.closest("tr").querySelector(".oder-id").textContent); // Tu nut bam tim den thang cha tr, sau khi tim thay cha tim den idOrder
    numberOrder = e.target.closest("tr").querySelector(".oder-id").textContent;
  }
  bookingList.forEach(function (element) {
    if (element.idOder == numberOrder) {
      element.isPay = true;
    }
  });
  localStorage.setItem("bookingList", JSON.stringify(bookingList));
  console.log(bookingList);
  renderPurchase();
});

//---------------------------------------------------//
//Admin thêm sửa xoa
let linkImg = document.querySelector(".link");
let title = document.querySelector(".title");
let content = document.querySelector(".content");
let btnAdd = document.querySelector(".btnAdd");
let table = document.querySelector("table");
btnAdd.addEventListener("click", function () {
  let imgLink = linkImg.value;
  let productTitle = title.value;
  let productContent = content.value;

  // Tạo các phần tử HTML mới
  let newRow = document.createElement("tr");
  let imgAdd = document.createElement("td");
  let titleAdd = document.createElement("td");
  let contentAdd = document.createElement("td");

  // Đưa link thành dạng ảnh
  let imgElement = document.createElement("img");
  imgElement.src = imgLink;
  imgAdd.appendChild(imgElement);

  // Đẩy nội dung
  titleAdd.innerHTML = productTitle;
  contentAdd.innerHTML = productContent;

  // Thêm các ô vào hàng mới
  newRow.appendChild(imgAdd);
  newRow.appendChild(titleAdd);
  newRow.appendChild(contentAdd);

  // Thêm hàng mới vào bảng
  table.appendChild(newRow);

  //reset lại ô input
  linkImg.value = "";
  title.value = "";
  content.value = "";

  //Đẩy những thứ vừa thêm vào web list sản phẩm

  //Lấy mảng tours từ local
  let toursList = JSON.parse(localStorage.getItem("tours"));

  //Tạo 1 obj
  let newTour = {
    img: imgLink,
    title: productTitle,
    content: productContent,
  };
  //Đẩy obj vào tours
  toursList.push(newTour);

  //Lưu mảng vào local
  localStorage.setItem("tours", JSON.stringify(toursList));

  renderProductList();
});

// Xóa sp
let tableDelete = document.getElementById("delete");

let toursListDelete = JSON.parse(localStorage.getItem("tours"));

toursListDelete.forEach(function (element, i) {
  let rowDelete = tableDelete.insertRow(-1);
  let titleDelete = rowDelete.insertCell(0);
  titleDelete.innerHTML = element.title;

  let buttonCell = rowDelete.insertCell(1);
  let deleteButton = document.createElement("button");
  deleteButton.className = "btnDelete";
  deleteButton.innerHTML = "Xóa";
  buttonCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", function (id) {
    //Xem hang nut button
    let row = this.parentNode.parentNode;

    //Lay tieu de cua o trong dong xoa
    let tourTitle = row.cells[0].innerHTML;

    //lay danh sach tours tu localStorage
    let toursList = JSON.parse(localStorage.getItem("tours"));

    //Tim vi tri cua tour can xoa
    let number = toursList.findIndex(function (tour) {
      return tour.title == tourTitle;
    });
    //Xoa khoi danh sach
    if (number != -1) {
      toursList.splice(number, 1);
    }
    //Sau khi xoa xong. cap nhat lai danh sach
    localStorage.setItem("tours", JSON.stringify(toursList));
    //Xoa dong
    row.remove();
  });
});

//Sửa sản phẩm
let editTable = document.querySelector("#editTable");
let tourEdit = JSON.parse(localStorage.getItem("tours"));
let edit = document.querySelector("#edit");

//Hiển thị sản phẩm
function renderEditTour() {
  editTable.innerHTML = "";
  tourEdit.forEach(function (e, i) {
    editTable.innerHTML += `
    <tr id="eidtTour">
      <td>${e.img}</td>
      <td>${e.title}</td>
      <td>${e.content}</td>
      <td><button class="btnEdit" onclick="editProduct(${i})">Sửa</button></td>
    </tr>
    `;
  });
}
renderEditTour();
//Thực hiện nút sua
let btnEdit = document.querySelectorAll(".btnEdit");
let i;
function editProduct(x) {
  edit.linkImg.value = tourEdit[x].img;
  edit.titleEdit.value = tourEdit[x].title;
  edit.contentEdit.value = tourEdit[x].content;
  i = x;
}
//Thuc hien nut xac nhan
edit.addEventListener("submit", function (e) {
  e.preventDefault();
  let NewTour = {
    img: edit.linkImg.value,
    title: edit.titleEdit.value,
    content: edit.contentEdit.value,
  };
  tourEdit[i] = NewTour;
  localStorage.getItem("tours", stringify(tourEdit));
});
