// Inputs
const postForm = document.querySelector('#post-form');
const tituloInput = document.querySelector('#titulo');
const conteudoInput = document.querySelector('#conteudo');

// Renders Output
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');
const postCard = document.querySelector('#post-renderizado');
const loadingIndicator = document.querySelector('#loading');

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    loadingIndicator.classList.remove('hidden');
    postCard.classList.add('hidden');

    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao realizar a postagem');
        }
        return response.json();
    })
    .then((json) => {
        console.log('Sucesso:', json);
        
        renderizadorTitulo.innerHTML = json.title;
        renderizadorConteudo.innerHTML = json.body;

        postCard.classList.remove('hidden');
        loadingIndicator.classList.add('hidden');

        postForm.reset();
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar seu post. Tente novamente.');
        loadingIndicator.classList.add('hidden');
    });
});