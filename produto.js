const imagemPrincipal = document.getElementById('imagem-principal');
const miniaturas = document.querySelectorAll('.miniaturas');
miniaturas.forEach(miniaturas => {
    miniaturas.addEventListener('click', function() {
const novImagem = this.getAttribute('data-imagem');
imagemPrincipal.scr = novaImagem;
});
});