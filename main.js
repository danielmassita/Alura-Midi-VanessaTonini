// Tocando o som POM.........................................
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelectorAll('.tecla')

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

/*
// document.querySelector('#som_tecla_pom').play(); //essa linha vai dar erro no console do arquivo ao abrir, pois existe uma ordem de ação... No index.html, o <script> roda primeiro de carregar os sons do <body>, então quando dependemos de elementos dentro do body do html, devemos colocar o script ao final do texto, por exemplo, uma linha acima antes de fechar o </body>

// Tocando o som CLAP..........................................
function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

// Tocando o som TIM..........................................
function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

// Tocando o som Puff..........................................
function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

// Tocando o som Splash..........................................
function tocaSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

// Tocando o som TOIM..........................................
function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

// Tocando o som Psh..........................................
function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

// Tocando o som TIC..........................................
function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

// Tocando o som TOM..........................................
function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;

*/