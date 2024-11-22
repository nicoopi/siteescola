let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto slide (opcional)
setInterval(() => {
    changeSlide(1);
}, 3000); // Muda a cada 3 segundos


function showAlert(productName) {
    alert('Você clicou em: ' + productName);
}
function toggleDescription(product) {
    const description = product.querySelector('.description');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block'; // Mostra a descrição
    } else {
        description.style.display = 'none'; // Esconde a descrição
    }
}
document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (name === "" || contact === "" || message === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Interrompe a execução se algum campo estiver vazio
    }

    // Aqui você pode processar os dados do formulário como desejar
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\nContato: ${contact}\nMensagem: ${message}`);
    
    // Limpa o formulário após o envio
    document.getElementById('contactForm').reset();
});
document.getElementById('btnEnviar').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto').value;
    alert('Você enviou: ' + inputTexto);
});

document.getElementById('btnLimpar').addEventListener('click', function() {
    document.getElementById('inputTexto').value = '';
});
document.getElementById('contato-btn').addEventListener('click', function() {
    alert('Obrigado por entrar em contato! Nossa equipe irá responder em breve.');
});