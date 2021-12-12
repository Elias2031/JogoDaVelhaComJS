let playTime = "player1"

function adicionaJogada(id){
    if (playTime === "player1"){
        document.getElementById(id).src = "imagens/x.png";
        playTime = "player2"
    }else{
        document.getElementById(id).src = "imagens/bola.png";
        playTime = "player1"
    }
}

function mudaPlacar(playTime){
    if(playTime === "player1"){
    document.getElementById(mostrador_img).src = "imagens/x.png";
    }else{
        document.getElementById(mostrador_img).src = "imagens/bola.png";
    }
}