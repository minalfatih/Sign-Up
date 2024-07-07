let input = document.querySelectorAll("input");

let str = [];
input.forEach((input) => {
  input.onfocus = function () {
    // console.log(this.previousElementSibling.textContent);
    if (input.value === "") {
      this.previousElementSibling.classList.add("active");
    }
  };
  input.onblur = function () {
    if (this.value === "") {
      this.previousElementSibling.classList.remove("active");
    }
  };
});

let btn = document.querySelectorAll(".btn");

btn[0].onclick = function () {
  btnActive(this, 2);
};
btn[1].onclick = function () {
  btnActive(this, 3);
};

function btnActive(btn, num) {
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    input[num].setAttribute("type", "text");
  } else {
    input[num].setAttribute("type", "password");
  }
}

document.forms[0].onsubmit = function (e) {
  let user = false;
  let email = false;
  let password = false;
  let confirm = false;

  let regexUser = /[a-z]{3,}/gi;
  if (document.querySelector("#username").value.match(regexUser)) {
    document
      .querySelector("#username")
      .nextElementSibling.classList.remove("active");
    user = true;
  } else {
    document
      .querySelector("#username")
      .nextElementSibling.classList.add("active");
  }

  let regexEmail = /\w+@[a-z]{2,}\.[a-z]{2,}/gi;
  // console.log(regexEmail.test(document.querySelector("#email").value));
  if (document.querySelector("#email").value.match(regexEmail)) {
    document
      .querySelector("#email")
      .nextElementSibling.classList.remove("active");
    document
      .querySelector("#email")
      .nextElementSibling.nextElementSibling.classList.remove("active");
    email = true;
  } else {
    if (regexEmail.test(document.querySelector("#email").value) === false) {
      document
        .querySelector("#email")
        .nextElementSibling.nextElementSibling.classList.add("active");
      document
        .querySelector("#email")
        .nextElementSibling.classList.remove("active");
    }
    if (document.querySelector("#email").value === "") {
      document
        .querySelector("#email")
        .nextElementSibling.classList.add("active");
      document
        .querySelector("#email")
        .nextElementSibling.nextElementSibling.classList.remove("active");
    }
  }

  let regexPassword = /\w{6,}/gi;
  if (document.querySelector("#password").value.match(regexPassword)) {
    document
      .querySelector("#password")
      .nextElementSibling.classList.remove("active");
    password = true;
  } else {
    document
      .querySelector("#password")
      .nextElementSibling.classList.add("active");
  }
  if (document.querySelector("#conpassword").value !== "") {
    document
      .querySelector("#conpassword")
      .nextElementSibling.classList.remove("active");

    if (
      document.querySelector("#conpassword").value ===
      document.querySelector("#password").value
    ) {
      document
        .querySelector("#conpassword")
        .nextElementSibling.nextElementSibling.classList.remove("active");
      // console.log("match");
      confirm = true;
    }
    if (
      document.querySelector("#conpassword").value !==
      document.querySelector("#password").value
    ) {
      document
        .querySelector("#conpassword")
        .nextElementSibling.nextElementSibling.classList.add("active");
      // console.log("not match");
    }
  } else {
    document
      .querySelector("#conpassword")
      .nextElementSibling.classList.add("active");
    document
      .querySelector("#conpassword")
      .nextElementSibling.nextElementSibling.classList.remove("active");
  }

  if (
    user === true &&
    email === true &&
    password === true &&
    confirm === true
  ) {
    console.log("gooooooood");
    document.querySelector("section").classList.add("disabled");
    document.querySelector(".complete").classList.add("active");
    setTimeout(() => {
      document.querySelector(".complete .correct").classList.add("active");
    }, 300);
  } else {
    console.log("try");
  }

  e.preventDefault();
};

document.addEventListener("click", (e) => {
  if (e.target.id === "remove") {
    // document.querySelector(".complete").classList.remove("active");
    // document.querySelector(".complete .correct").classList.remove("active");
    // document.querySelector("section").classList.remove("disabled");
    location.reload();
  }
});
