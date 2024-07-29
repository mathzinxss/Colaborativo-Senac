/*
* Author:
* Parametros:
* O que faz:
* O que retorna:
*/

function calculaIdade(){
    let nasc = 0
    let ano = 2024
    
    nasc = prompt("Digite o ano de nascimento:");
    
    resp = 2024 - Number(nasc);
    
    alert(`No final do ano de ${ano} esta pessoa terá ${resp} anos!!!`);
}

window.document.getElementById('um').value="Conteúdo dinâmico"