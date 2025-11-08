const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  if (message.length < 5) {
    document.getElementById("messageError").textContent =
      "Message must be at least 5 characters";
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone must start with +380 and have 12 digits";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  if (isValid) {
    const userData = { name, message, phone, email };
    console.log("User data:", userData);
    alert("Message sent successfully!");
    form.reset();
  }
});
