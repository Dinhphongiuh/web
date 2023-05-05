const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const dangNhapButton = document.getElementById("DangNhap_Button");
const modalBody = document.getElementById("modal_body")
const closeModal = document.getElementById("close_modal");
const dangKyButton = document.getElementById("DangKy_Button");
const overLay = document.querySelector(".modal__overlay");
const container1 = document.querySelector(".container_modal");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

dangNhapButton.addEventListener("click", () => {
  modalBody.classList.add("modal_body-active");
  loginButton.click();
});

closeModal.addEventListener("click", () => {
  modalBody.classList.remove("modal_body-active")
});

dangKyButton.addEventListener("click", () => {
  modalBody.classList.add("modal_body-active");
  registerButton.click();
});

function hideModal()
{
  container.classList.remove("right-panel-active");
}

container1.addEventListener('click', function (event) {
  event.stopPropagation();
});

overLay.addEventListener('click', function (event) {
  event.stopPropagation();
});
