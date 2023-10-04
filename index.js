const textareaElement = document.getElementById("textarea");

const totalConterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter");

textareaElement.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  console.log(textareaElement.value.length);
  totalConterElement.innerText = textareaElement.value.length;
  max = textareaElement.getAttribute("maxlength");
  rem = max - textareaElement.value.length;
  remainingCounterElement.innerText = rem;
  checkZero(rem);
}

function checkZero(m) {
  if (m === 0) {
    alert("Sorry you have reached the character limit");
    return;
  }
}
