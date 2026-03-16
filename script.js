const params = new URLSearchParams(window.location.search);

const carro = params.get("carro");

if (carro) {
    const carroElemento = document.getElementById("carroSelecionado");
    carroElemento.textContent = carro;
}