const apply_form = document.querySelector(".cta-form");

apply_form.addEventListener("submit", (e) => {
  // e.preventDefault();

  let fullName = document.getElementById("full-name");
  let email = document.getElementById("email");

  console.log(`Name: ${fullName.value} and Email: ${email.value}`);
});
