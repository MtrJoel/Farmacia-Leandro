const buscar = document.getElementById("buscar");

buscar.addEventListener("keyup", () => {

const texto = buscar.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const nombre = card.querySelector("h3").textContent.toLowerCase();
card.style.display = nombre.includes(texto)
? "block"
: "none";

});
});