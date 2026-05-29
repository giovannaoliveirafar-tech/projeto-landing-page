var setaDireita = document.getElementById("seta-direita")
var bruna = document.getElementById("bruna")
var leonardo = document.getElementById("leonardo")
var samantha = document.getElementById("samantha")
var setaEsquerda = document.getElementById("seta-esquerda")

function RolarParaDireita() {
    bruna.style.display = "none"
    samantha.style.display = "flex"
    setaDireita.style.display = "none"
    setaEsquerda.style.display = "flex"
}

function RolarParaEsquerda() {
    bruna.style.display = "flex"
    samantha.style.display = "none"
    setaDireita.style.display = "flex"
    setaEsquerda.style.display = "none"
}