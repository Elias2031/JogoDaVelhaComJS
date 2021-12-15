let playTime = "player1"
let gameOver = false

mudaPlacar(playTime);

function adicionaJogada(id){
    if(gameOver === true){
        return;
    }

    if (playTime === "player1"){
            document.getElementById(id).src = "imagens/x.png";
            mudaPlacar(playTime = "player2");
            document.getElementById(id).jogada = "player1";
            checaVencedor();
    }else{
            document.getElementById(id).src = "imagens/bola.png";
            mudaPlacar(playTime = "player1");
            document.getElementById(id).jogada = "player2";
            checaVencedor();
    }
}

function mudaPlacar(){
    if(playTime === "player1"){
    document.getElementById('mostrador_img').src = "imagens/x.png"
    }else{
        document.getElementById('mostrador_img').src = "imagens/bola.png";
    }
}

async function checaVencedor(){
    let vencedor = undefined
            
    let a1 = document.getElementById('a1').jogada;
    let a2 = document.getElementById('a2').jogada;
    let a3 = document.getElementById('a3').jogada;

    let b1 = document.getElementById('b1').jogada;
    let b2 = document.getElementById('b2').jogada;
    let b3 = document.getElementById('b3').jogada;

    let c1 = document.getElementById('c1').jogada;
    let c2 = document.getElementById('c2').jogada;
    let c3 = document.getElementById('c3').jogada;

    if( a1 !== undefined && a1 === a2 && a2 === a3){
        vencedor = a1
    } 
    if(b1 !== undefined && b1 === b2 && b2 === b3){
        vencedor = b1
    }
    if(c1 !== undefined & c1 === c2 && c2 === c3){
        vencedor = c1
    }


    if(a1 !== undefined && a1 === b1 && b1 === c1){
        vencedor = a1
    }
    if(a2 !== undefined && a2 === b2 && b2 === c2){
        vencedor = a2
    }
    if(a3 !== undefined && a3 === b3 && b3 === c3){
        vencedor = a3
    }


    if(a1 !== undefined && a1 === b2 && b2 === c3){
        vencedor = a1
    }
    if(a3 !== undefined && a3 === b2 && b2 === c1){
        vencedor = a3
    }

    if (vencedor !== undefined){
        await sleep(50)
        alert(`${vencedor} venceu`)
        gameOver = true
    }

    function sleep(ms){
        return new Promise(resolve => (setTimeout(resolve, ms)))
    }
}