document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const team = document.getElementById("team").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const car = document.getElementById("car").value.trim();

    if (!name || !team || !email || !phone || !car) {
    alert("Please fill in all fields");
    return;
  }

  const userData = { name, team, email, phone, car };
  localStorage.setItem("questUser", JSON.stringify(userData));

  // 🔥 Перехід на оплату
  window.location.href = "https://your-stripe-payment-link";
});