let users = JSON.parse(localStorage.getItem("users")) || [];

let form = document.querySelector(".mainForm");
let errorContainer = document.querySelector(".error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = form.email.value;
  let password = form.password.value;
  let confirmPassword = form.confirmPassword.value;

  let passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let error = "";

  if (!passRegex.test(password)) {
    error += "Password không hợp lệ, nhập lại...<br/>";
  }
  if (!emailRegex.test(email)) {
    error += "Email không hợp lệ, nhập lại...<br/>";
  }
  if (password !== confirmPassword) {
    error += "Xác nhận mật khẩu không hợp lệ, nhập lại...";
  }
  if (
    passRegex.test(password) &&
    emailRegex.test(email) &&
    password === confirmPassword
  ) {
    error = "";
    let newuser = {
      id: Math.floor(Math.random() * 10000000),
      email: email,
      password: password,
      isLogIn: false,
      block: false,
    };
    console.log(newuser);
    users.push(newuser);

    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "http://127.0.0.1:5500/Trang_chu/page1.html";
  }
  errorContainer.innerHTML = error;
});
