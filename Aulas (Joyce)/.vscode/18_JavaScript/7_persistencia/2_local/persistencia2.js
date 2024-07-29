function salvarNome()
{
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let pessoa = {"nome":nome,"idade":idade};
    let pessoaJson = JSON.stringify(pessoa);
    //alert(pessoaJson);
    localStorage.setItem('pessoaSalve',pessoaJson);
}
function lerNome()
{
    let paragrafo = document.getElementById('mensagem');
    let pessoaJson = localStorage.getItem('pessoaSalve');
    let pessoa = JSON.parse(pessoaJson);
    //alert(pessoa);
    if(pessoa == null){
        paragrafo.innerHTML = "Nao tem registro pessoa";
    }else{
        paragrafo.innerHTML = pessoa.nome;
        paragrafo.innerHTML = paragrafo.innerHTML+'<br>';
        paragrafo.innerHTML += pessoa.idade;// paragrafo.innerHTML = paragrafo.innerHTML+pessoa.idade;
    }
}
function apagarNome()
{
    let paragrafo = document.getElementById('mensagem');
    var nome = localStorage.removeItem('pessoaSalve');
    paragrafo.innerHTML = "Registro Apagado";
    
}