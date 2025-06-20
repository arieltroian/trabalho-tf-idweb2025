const parametros = new URLSearchParams(window.location.search);
const termoBuscar = parametros.get("q");
if (termoBuscar);
    const pesquisa = termoBuscar.toLowerCase();
    const resultadosDiv = document.querySelectorAll('.card');
    let encontrou = false;
    resultadosDiv.forEach(card => {
        const titulo = card.querySelector('.card-title').textContent.toLowerCase()
        if (titulo.includes(pesquisa)){
            card.style.display = 'block';
            encontrou = true;
        } else {
            card.style.display = 'none';
        }
    });
    if (!encontrou) {
        alert('nenhum produto encontrado.');
}