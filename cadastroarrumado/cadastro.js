
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const nomeCadastro = document.getElementById('nomeCadastro').value;
    const cpfCadastro = document.getElementById('cpfCadastro').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const telefoneCadastro = document.getElementById('telefoneCadastro').value;
    const senhaCadastro = document.getElementById('senhaCadastro').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    const usuario = {nomeCadastro:nomeCadastro, cpfCadastro:cpfCadastro, emailCadastro:emailCadastro, telefoneCadastro:telefoneCadastro, senhaCadastro:senhaCadastro}
    localStorage.setItem('usuario', JSON.stringify(usuario))
    
    alert("Seja bem vindo!")
})


document.querySelectorAll('.PE').forEach(btn => {
    btn.addEventListener('click', function() {
        const tipo = this.getAttribute('data-tipo');
        Escolher(tipo);
    });
});

function Escolher(tipo) {
    fetch(`cadastro_${tipo}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            document.getElementById('nome').innerHTML = texto.nome;
            document.getElementById('cpf').innerHTML = texto.cpf;

            document.querySelectorAll('.PE').forEach(btn => btn.classList.remove('ativo'));

            document.querySelector(`.PE[data-tipo="${tipo}"]`).classList.add('ativo');
        })
        .catch(error => console.error('Erro buscando textos:', error));
}
