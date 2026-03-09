const menuToggle = document.getElementaryById('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); });

    const cotacaoBtn = document.getElementById('cotacao-btn');
    cotacaoBtn.addEventListener('click', () => {
        alert('Cotação solicitada! Em breve entraremos em contato.'); });

        const buyButtons = document.querySelectorAll('.buy-btn');
        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Produto adicionado ao carrinho!'); });   
            
    });