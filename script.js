const form = document.getElementById("form");
const button = document.getElementById("button");

form.addEventListener("submit", function (event) {
  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const emailRegex = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)");
  const passwordRegex = new RegExp("^[a-zA-Z0-9]*$");
  const phoneRegex = new RegExp("^[0-9]{12}$");

  if (
    firstName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all required fields");
    event.preventDefault();
    return false;
  }

  if (
    password.length < 8 ||
    password.length > 20 ||
    passwordRegex.test(password)
  ) {
    alert(
      "Password must be between 8 and 20 characters, no special characters."
    );
    event.preventDefault();
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    event.preventDefault();
    return false;
  }

  if (phone !== "" && !phoneRegex.test(phone)) {
    alert("Invalid phone number");
    event.preventDefault();
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    event.preventDefault();
    return false;
  }

  return true;
});

button.addEventListener("click", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert("Please fill all required fields");
  }
});
