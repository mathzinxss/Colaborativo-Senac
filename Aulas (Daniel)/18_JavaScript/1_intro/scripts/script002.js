    window.document.getElementById('um').innerHTML = "Conteúdo dinâmico"

    document.getElementById('um').onclick = calculaIdade;

    document.getElementById('dois').ondblclick = function () {
        calculaIdade();
    }

    document.getElementById('tres').onmouseover = function () {
        let nasc = 0
        let ano = 2024

        nasc = prompt("Digite o ano de nascimento:");

        resp = 2024 - Number(nasc);

        alert(`No final do ano de ${ano} esta pessoa terá ${resp} anos!!!`);
    }
    // arrow function - função seta
    document.getElementById('quatro').onmouseout = () => {
        let nasc = 0
        let ano = 2024

        nasc = prompt("Digite o ano de nascimento:");

        resp = 2024 - Number(nasc);

        alert(`No final do ano de ${ano} esta pessoa terá ${resp} anos!!!`);
    }
