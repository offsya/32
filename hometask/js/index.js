console.clear();

// 1
const runTask1 = function () {
  document.body.innerHTML = `
  <div>
    <div class="colorText">
    <button>Button</button>
    <p id="paragraph1">I am just paragraph</p>
    </div>
    
    <div>
      <input/>
    </div>
  </div>
`;

  const button = document.querySelector("button");
  const buttonText = button.innerText;
  const input = document.querySelector("input");

  button.addEventListener("click", onButtonClick);
  button.addEventListener("mouseover", onButtonMouseOver);
  button.addEventListener("mouseleave", onButtonMouseLeave);
  input.addEventListener("blur", checkMail);
  input.addEventListener("focus", focusMail);

  function onButtonClick() {
    button.style.fontSize = "50px";
  }

  function onButtonMouseOver() {
    button.innerText = "Наведён курсор";
  }

  function onButtonMouseLeave() {
    button.innerText = buttonText;
  }

  function checkMail(event) {
    input.style.backgroundColor = "#FF8A80";
    let inputBox = event.target.value;
    if (inputBox.indexOf("@") == -1) {
      alert("Неверное значение почтового ящика");
    }
  }

  function focusMail() {
    input.style.backgroundColor = "#69F0AE";
  }
};