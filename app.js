
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto;
let boton = document.querySelector('.button-add');
let titulo = document.querySelector('h1');
titulo.textContent = 'Amigo Secreto';
let mensaje = document.querySelector('h2');
mensaje.textContent = 'Digite el nombre de sus amigos';
let subtitulo = document.querySelector('h3');
subtitulo.textContent = 'Ingrese al menos 3 amigos';
function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    if (amigo === '') {
        let mensaje = document.querySelector('#resultado');
        mensaje.textContent = 'Por favor, ingrese un nombre de amigo';
        setTimeout(() => {
            mensaje.textContent = ''; 
        }, 2000);      
        return;
    }
    let amigos = document.querySelector('#listaAmigos');
    let amigoItem = document.createElement('li');
    amigoItem.textContent = amigo;
    amigos.appendChild(amigoItem);
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {

    let amigos = document.querySelectorAll('#listaAmigos li');
    if (amigos.length === 0) {
        let resultado = document.querySelector('#resultado');
        resultado.textContent = 'No hay amigos en la lista';
        setTimeout(() => {
            resultado.textContent = ''; 
        }, 2000);
        return;
    }else if (amigos.length < 3) {
        let resultado = document.querySelector('#resultado');
        resultado.textContent = 'No hay suficientes amigos para sortear, debe haber al menos 3';
        setTimeout(() => {
            resultado.textContent = ''; 
        }, 2000);
        return;
    }
    boton.disabled = true;
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.querySelector('#resultado');
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto.textContent;
}

function limpiarAmigos() {
    let amigos = document.querySelectorAll('#listaAmigos li');
    if (amigos.length !== 0 && amigoSecreto !== undefined) {
        let resultado = document.querySelector('#resultado');
        resultado.textContent = 'Hay amigos sin sortear';
        setTimeout(() => {
            resultado.textContent = ''; 
        }, 2000);
        return;
    }
    let resultado = document.querySelector('#resultado');
    amigos.forEach(amigo => {
        amigo.remove();
        resultado.textContent = '';
    });
    boton.disabled = false;
    document.querySelector('#amigo').value = '';
}