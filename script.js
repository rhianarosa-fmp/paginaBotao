

let cliques = 0;

function destacar() {
    cliques++;

    document.getElementById("titulo").innerText = "Curiosidade 2";

    document.getElementById("mensagem").innerText = "As abelhas conseguem reconhecer rostos humanos.";

    document.getElementById("cartao").classList.add("destaque");

    document.getElementById("contador").innerText = "Cliques: " + cliques;
}

function voltar() {
    document.getElementById("titulo").innerText = "Curiosidade 1";

    document.getElementById("mensagem").innerText = "Polvos têm três corações.";

    document.getElementById("cartao").classList.remove("destaque");
}
