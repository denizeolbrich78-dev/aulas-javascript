
console.log("Sobrevivente conectado ao DOM!");

const cabecalho = document.querySelector("header");
console.log(cabecalho);

let totalMatches = 0;

const btnTema = document.querySelector('#btn-tema');

const boasVindas = document.querySelector('#boas-vindas');

const tituloSite = document.querySelector('header h1');

const listaBeneficios = document.querySelectorAll('ol li');

const img = document.querySelector('img');

const form = document.querySelector('#form-cadastro');

console.log(`Quantidade de benefícios: ${listaBeneficios.length}`);

const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');

tituloSite.textContent = "The Walking Date 🧟";

document.querySelector('cite').innerHTML =
    "- <strong>Zezinho da Foice</strong>, Sobrevivente Nível 5";

const textoBoasVindas = document.querySelector('#boas-vindas h2').textContent;

console.log(textoBoasVindas);

const aside = document.querySelector('aside');

aside.style.borderColor = 'var(--cor-sangue)';
aside.style.fontSize = '1.1rem';

console.log(img.getAttribute('alt'));

img.setAttribute(
    'alt',
    'Casal de zumbis apaixonados caminhando ao pôr do sol'
);

campoNome.value = 'Sobrevivente Anônimo';

document.querySelectorAll('tbody tr')[0].classList.add('destaque-infectado');

const aviso = document.createElement('p');

aviso.textContent =
    "⚠️ ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!";

aviso.style.backgroundColor = 'var(--cor-zumbi)';
aviso.style.textAlign = 'center';

document.querySelector('#barra-alerta').appendChild(aviso);

const novoBeneficio = document.createElement('li');

novoBeneficio.textContent =
    "Seguro contra perda de membros durante o primeiro encontro.";

document.querySelector('#beneficios ol').appendChild(novoBeneficio);

const botaoFecharAlerta = document.querySelector('#fechar-alerta');

botaoFecharAlerta.addEventListener('click', () => {
    document.querySelector('#barra-alerta').remove();
});

const htmlRoot = document.documentElement;

btnTema.addEventListener('click', () => {

    if (htmlRoot.getAttribute('data-theme') === 'light') {

        htmlRoot.setAttribute('data-theme', 'dark');
        btnTema.textContent = "Modo Sobrevivência ☀️";

    } else {

        htmlRoot.setAttribute('data-theme', 'light');
        btnTema.textContent = "Modo Sombrio 🌙";

    }

});

const botaoMatch = document.querySelector('.botao-match');

botaoMatch.addEventListener('click', function (event) {

    totalMatches++;

    document.querySelector('#placar-matches').textContent =
        "Matches: " + totalMatches;

    event.target.textContent = "Match Confirmado! 💘🧟";

});

const botaoCalcular = document.querySelector('#btn-calcular');

botaoCalcular.addEventListener('click', () => {

    const campoDiasUsuario = document.querySelector('#dias-infectado');
    const campoDiasParceiro = document.querySelector('#dias-parceiro');

    let valorUsuario = Number(campoDiasUsuario.value);
    let valorParceiro = Number(campoDiasParceiro.value);

    let soma = valorUsuario + valorParceiro;

    if (
        campoDiasUsuario.value.trim() !== '' &&
        campoDiasParceiro.value.trim() !== '' &&
        Number.isFinite(soma) &&
        valorUsuario >= 0 &&
        valorParceiro >= 0
    ) {

        document.querySelector('#resultado-quimica').textContent =
            'Nível de podridão combinada: ' + soma +
            ' dias! Compatibilidade alta!';

    } else {

        document.querySelector('#resultado-quimica').textContent =
            'Erro: Digite números válidos de dias, humano!';

    }

});

campoNome.addEventListener('input', () => {

    document.querySelector('#preview-cracha').textContent =
        "Crachá de Sobrevivente: " + campoNome.value;

});

img.addEventListener('mouseover', () => {

    console.log("Cuidado! Não chegue muito perto da tela...");

});

form.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log("Evento submit disparado!");

    alert(
        "Cadastro concluído, " +
        campoNome.value +
        "! Prepare sua melhor mordida."
    );

    campoEmail.value = "";
    campoNome.value = "";

    document.querySelector('#preview-cracha').textContent =
        "Crachá: ...";

    botaoMatch.textContent = "Dar Match Sangrento";

});

document.addEventListener('keydown',function(event){
    if (event.key === "Escape"){
        document.querySelector('#barra-alerta').remove();
    }
})