const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cards = document.querySelectorAll(".card");
var cardAtual = 0;

btnAvancar.addEventListener("click", function(){
    
    cardAtual++;
    cards[cardAtual].classList.add("selected");

    const cardSelected = document.querySelectorAll(".selected");
    cardSelected.classList.remove("selected");
})

btnVoltar.addEventListener("click", function(){
    
    cardAtual--;
    cards[cardAtual].classList.add("selected");

    const cardSelected = document.querySelectorAll(".selected");
    cardSelected.classList.remove("selected");
})