const darkButton = document.getElementById("dark");

const lightButton = document.querySelector("#light");

const body = document.querySelector("body");

function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}

function lightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}

darkButton.addEventListener("click", darkMode);

darkButton.addEventListener("click", function () {
  alert("Dark Mode enabled");
});

lightButton.addEventListener("click", lightMode);

const h1 = document.querySelector("h1");

h1.style.color = "red";

h1.innerText = "Goodbye";

const paragraphs = document.querySelectorAll("p");

// for (let para of paragraphs) {
//   para.style.color = "red";
// }

// paragraphs.forEach((e) => {
//   e.style.backgroundColor = "aqua";
// });

const newPara = document.createElement("h1");
newPara.innerText = "Hey im a new paragraph";
const newPara2 = document.createElement("h1");
newPara2.innerText = "Im added after";

h1.prepend(newPara);

h1.append(newPara2);
