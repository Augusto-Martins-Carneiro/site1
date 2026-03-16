const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}




const params = new URLSearchParams(window.location.search);
const carro = params.get("carro");

const campoCarro = document.getElementById("carroSelecionado");

if (campoCarro && carro) {
    campoCarro.textContent = carro;
}



const cpfInput = document.querySelector('input[placeholder="000.000.000-00"]');

if (cpfInput) {

    cpfInput.addEventListener("input", function () {

        let value = this.value.replace(/\D/g, "");

        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        this.value = value;

    });

}


const form = document.querySelector(".form-compra");

if (form) {

    form.addEventListener("submit", function(e){

        const nome = form.querySelector('input[type="text"]').value.trim();

        if(nome.length < 3){
            e.preventDefault();
            alert("Digite um nome válido.");
            return;
        }

        if(!cpfInput.value || cpfInput.value.length < 14){
            e.preventDefault();
            alert("Digite um CPF válido.");
            return;
        }

        alert("Processando compra...");

    });

}


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

});


cards.forEach(card => {

    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});


const cotacaoBtn = document.getElementById("cotacaoBtn");

if (cotacaoBtn) {

    cotacaoBtn.addEventListener("click", () => {

        alert("Para fazer uma cotação, entre em contato com a equipe Carflix.");

    });

}
