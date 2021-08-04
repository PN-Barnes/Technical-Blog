const { json } = require("sequelize/types");

const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  if (email && password) {
    const res = await fetch("api/users/login", {
      method: "Post",
      body: json.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      document.location.replace("/");
    } else {
      alert("Login attempt failed");
    }
  }
};

document.querySelector("#login-form").addEventListener("submit", loginForm);
