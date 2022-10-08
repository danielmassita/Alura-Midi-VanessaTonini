function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom');

// document.querySelector('#som_tecla_pom').play(); //essa linha vai dar erro no console do arquivo ao abrir, pois existe uma ordem de ação... No index.html, o <script> roda primeiro de carregar os sons do <body>, então quando dependemos de elementos dentro do body do html, devemos colocar o script ao final do texto, por exemplo, uma linha acima antes de fechar o </body>