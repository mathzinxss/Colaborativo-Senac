let preco = 1000;
if(preco >= 1000){
    valFinal = preco*0.98;
}else if(preco >= 800){
    valFinal = preco*0.95;
}else if(preco >= 500){
    valFinal = preco*0.80;
}
console.log("O valor final é : " + valFinal);