// CRIANDO FUNÇÃO DO JOGO
function programa(){

// SORTEANDO MÃOS DO COMPUTADOR
const min = 0
const max = 3
function sortear(min, max) {
    let index = Math.random() * (max - min) + min;
    return parseInt(index);
}
const maos = ['pedra', 'papel', 'tesoura']

// SELECIONANDO QUANTIDADE DE RODADAS
let rodadas = parseInt(prompt('Digite quantas rodadas deseja jogar: '))

// DEFININDO CONTADORES MAQUINA VS USUÁRIO
let usuario = maquina = 0

// (DECLARANDO ITEM ; ENQUANTO ITEM < RODADAS ; ITEM += 1)
for (item=0; item <rodadas; item++) {
    
    // SORTEANDO MAO DO PC
    let numSorteado = sortear(min, max)
    let maoPC = maos[numSorteado]

    // RECEBENDO MAO DO USUÁRIO
    let user = prompt('Pedra, Papel ou Tesoura?').toLowerCase()
    
    // DEFININDO VENCEDOR DA RODADA 
         if(user.substring(2,0) == 'pa' && maoPC == 'papel') {
             console.log('')
        console.log('USER: '+user)
        console.log('MÁQUINA: '+maoPC) 
        console.log('EMPATE!') 
    }
    else if(user.substring(2,0) == 'pa' && maoPC == 'tesoura') {
        console.log('')
        console.log('USER: '+user)
        console.log('MÁQUINA: '+maoPC) 
        console.log('MÁQUINA VENCE!')
        maquina += 1
    }
    else if(user.substring(2,0) == 'pa' && maoPC == 'pedra') {
        console.log('')
        console.log('USER: '+user)
        console.log('MÁQUINA: '+maoPC) 
        console.log('USUÁRIO VENCE!')
        usuario += 1
    }

    else if(user.substring(2,0) == 'pe' && maoPC == 'pedra') {
        console.log('')
        console.log('USER: '+user) 
        console.log('MÁQUINA: '+maoPC) 
        console.log('EMPATE!') 
    }
    else if(user.substring(2,0) == 'pe' && maoPC == 'papel') {
        console.log('')
        console.log('USER: '+user) 
        console.log('MÁQUINA: '+maoPC) 
        console.log('MÁQUINA VENCE!') 
        maquina += 1 
    }
    else if(user.substring(2,0) == 'pe' && maoPC == 'tesoura') {
        console.log('')
        console.log('USER: '+user) 
        console.log('MÁQUINA: '+maoPC) 
        console.log('USUÁRIO VENCE!') 
        usuario += 1 
    }

    else if(user.substring(2,0) == 'te' && maoPC == 'tesoura') {
        console.log('')
        console.log('USER: '+user)
        console.log('MÁQUINA: '+maoPC) 
        console.log('EMPATE!')
    }
    else if(user.substring(2,0) == 'te' && maoPC == 'pedra') {
        console.log('')
        console.log('USER: '+user)
        console.log('MÁQUINA: '+maoPC) 
        console.log('MÁQUINA VENCE!')
        maquina += 1
    }
    else if(user.substring(2,0) == 'te' && maoPC == 'papel') {
        console.log('')
        console.log('USER: '+user)
        console.log('MÁQUINA: '+maoPC) 
        console.log('USUÁRIO VENCEU!')
        usuario += 1
    }
}

// DEFININDO VENCEDOR DAS RODADAS
if (usuario == maquina) {console.log('Empate')}
else if(usuario >= maquina) {console.log('Usuário Vence!')}
else if(maquina >= usuario) {console.log('Máquina Vence!')}

// OPÇÃO DE JOGAR NOVAMENTE
let resposta = prompt('Deseja jogar novamente? [SIM/NÃO]')[0].toUpperCase() 
function jogarNovamente(resposta){
    if (resposta === 'S'){programa()}
    else {console.log('Obrigado por Jogar nosso jogo')}
}
jogarNovamente(resposta)
}

// CHAMANDO FUNÇÃO DO JOGO
programa()