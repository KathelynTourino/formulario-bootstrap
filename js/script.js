const interesse = document.getElementById("interesse");
const valor = document.getElementById("valorInteresse");

interesse.addEventListener("input", function() {
    valor.textContent = interesse.value;
});