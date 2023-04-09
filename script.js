const form = document.getElementById("form");
const button = document.getElementById("button");

form.addEventListener("submit",function(event) {
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm-password = document.getElementById("confirm-password").value;


button.addEventListener("click", () => {
  form.submit();
});
