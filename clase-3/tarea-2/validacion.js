// Función de validación
function validateEmail(email) {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Elementos del DOM
const emailInput = document.getElementById("emailInput");
const validateBtn = document.getElementById("validateBtn");
const historyList = document.getElementById("historyList");

// Historial
const history = [];

// Evento del botón
validateBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const isValid = validateEmail(email);

  // Guardar en historial
  history.push({ email, isValid });

  // Limpiar lista y volver a mostrar historial
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.email || "(vacío)"}: ${item.isValid ? "Correo válido" : "Correo no válido"}`;
    li.className = item.isValid ? "valid" : "invalid";
    historyList.appendChild(li);
  });

  // Limpiar input
  emailInput.value = "";
});

