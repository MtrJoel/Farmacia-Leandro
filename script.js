const buscar = document.getElementById("buscar");

buscar.addEventListener("keyup", () => {
  const texto = buscar.value.toLowerCase();

  document.querySelectorAll(".card").forEach((card) => {
    const nombre = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = nombre.includes(texto) ? "block" : "none";
  });
});

const numero = "18095308746"; // Número de la farmacia

document.querySelectorAll(".btn-whatsapp").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".card");

        const medicamento = card.querySelector("h3").textContent;

        const mensaje =
`Hola, vi en su página que tienen disponible el medicamento "${medicamento}" y me gustaría obtener más información.`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });

});