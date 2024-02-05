var textoInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function limparPagina() {
    location.reload();
}

function criptografar() {
    var texto = textoInput.value

    if (texto === "") {
        alert("Por favor, insira um texto.");
        return limparPagina();
    }
    
    // Remove acentos
    var textoSemAcentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (texto != textoSemAcentos) {
        alert("Por favor, respeite as regras e tente novamente.");
        return limparPagina();
    }
    
    // Remove letras maiúsculas
    var textoSemMaiusculas = textoSemAcentos.toLowerCase().replace(/[^a-z]/gi, '');

    if (texto != textoSemMaiusculas) {
        alert("Por favor, respeite as regras e tente novamente.");
        return limparPagina();
    }
    
    var resultCripto = textoSemMaiusculas.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';   
}

function descriptografar() {
    var texto = textoInput.value

    if (texto === "") {
        alert("Por favor, insira um texto.");
        return limparPagina();
    }
    
    // Remove acentos
    var textoSemAcentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (texto != textoSemAcentos) {
        alert("Por favor, respeite as regras e tente novamente.");
        return limparPagina();
    }
    
    // Remove letras maiúsculas
    var textoSemMaiusculas = textoSemAcentos.toLowerCase().replace(/[^a-z]/gi, '');

    if (texto != textoSemMaiusculas) {
        alert("Por favor, respeite as regras e tente novamente.");
        return limparPagina();
    }
    
    var resultDescripto = textoSemMaiusculas.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';   
}

function copiar() {
    var textoCop = document.getElementById('output').querySelector('textarea');
  
    textoCop.select();
    var copiou = document.execCommand('copy');
    alert("Seu texto foi copiado com sucesso.");

    if (copiou == true) {
        return limparPagina();
    }
} 
