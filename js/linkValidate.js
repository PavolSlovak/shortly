const error_msg = document.getElementById("error-msg");
const link_form = document.getElementById("link-form");
const input = document.getElementById("link");

link_form.addEventListener("submit", validateLink);

function validateLink(e) {
  e.preventDefault();
  const inputValue = input.value;
  console.log(link);
  const linkPattern = /^(http|https):\/\/[^ "]+$/;

  if (inputValue.length === 0) {
    error_msg.innerHTML = "Please enter something";
    input.classList.add("border", "border-red");
    return false;
  }
  if (!linkPattern.test(inputValue)) {
    error_msg.innerHTML = "Please enter a valid URL";
    input.classList.add("border", "border-red");

    return false;
  }

  error_msg.innerHTML = "";
  input.classList.remove("border-red");

  alert("Link submitted successfully!");
  return true;
}
