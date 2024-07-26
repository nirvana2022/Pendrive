document.getElementById("loginForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_usuario: email, password: password }),
  });

  const data = await response.json();

  if (response.ok) {
      localStorage.setItem("token", data.token);
      document.getElementById("message").textContent = "Acceso correcto!";
      document.getElementById("message").style.color = "#229954";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      // Redirigir a la página sistema.html
      window.location.href = "/ProyectosDesarrollo/learnit/login-module/frontend/vistaEstudiante.html";
  } else {
      document.getElementById("message").textContent = data.error || "Usuario o Contraseña Incorrectos!";
      document.getElementById("message").style.color = "#E74C3C";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
  }
});

const pwd = document.getElementById('password');
const chk = document.getElementById('chk');
chk.onchange = function(e) {
  pwd.type = chk.checked ? "text" : "password";
};
