

    window.document.getElementById('um').innerHTML = "Conteudo dinâmico"

    document.getElementById('um').onclick = calculaIdade;

    document.getElementById('dois').ondblclick = function () {
        calculaIdade()
    }

    document.getElementById('tres').onmouseover = function () {
        calculaIdade()
    }
    document.getElementById('quatro').onmouseout = function () {
        calculaIdade()
    }
    //arrow function - função seta
