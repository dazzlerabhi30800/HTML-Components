const button = document.querySelector(".button");
const toggleButton = document.querySelector(".toggle-button");
const message = document.querySelector(".message");
const alertMsg = document.querySelector(".alert");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  button.classList.toggle("active");
  if (toggleButton.classList.contains("active")) {
    setTimeout(function () {
      message.classList.add("show");
      alertMsg.innerText = "Dark Mode Enabled";
      // alert('hello');
    }, 150);
    setTimeout(function () {
      message.classList.remove("show");
    }, 3000);
    message.classList.remove("show");
    document.body.style.backgroundColor = "black";
  } else {
    setTimeout(function () {
      message.classList.add("show");
      alertMsg.innerText = "Dark Mode Disabled";
    }, 150);
    setTimeout(function () {
      message.classList.remove("show");
    }, 3000);
    message.classList.remove("show");
    document.body.style.backgroundColor = "#e9e8e8";
    console.log("save this file");
    console.log("This is the best text editor vim in linux");
  }
});

console.log("hello");
const container = document.querySelector('.container');
container.innerText = 'This is a container written in neovim editor';





