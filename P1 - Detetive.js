let contador = 0
let classificacao

// Criando Funções == INTERROGAR USUÁRIO
function interrogar(contador) {
    let p1 = prompt('Você telefonou para a vitima?').toUpperCase()[0]
    if (p1=='S') { ++contador }
    console.log(contador)

    let p2 = prompt('Você esteve no local do crime?').toUpperCase()[0]
    if (p2=='S') { ++contador }
    console.log(contador)

    let p3 = prompt('Você mora perto da vítima?').toUpperCase()[0]
    if (p3=='S') { ++contador }
    console.log(contador)

    let p4 = prompt('Você devia para a vítima?').toUpperCase()[0]
    if (p4=='S') { ++contador }
    console.log(contador)

    let p5 = prompt('Você já trabalhou com a vítima?').toUpperCase()[0]
    if (p5=='S') { ++contador }
    console.log(contador)
    
    return contador
}
    
// Criando Funções = CLASSIFICAR USUÁRIO DE ACORDO COM RESPOSTAS
function classificar(contadorFinal) {
    
    // Se o USUÁRIO responder SIM para a pergunta, o contador soma +1
    if (contadorFinal <= 1) { classificacao = 'Inocente!' }
    else if (contadorFinal==2) { classificacao = 'Suspeito(a)!' }
    else if (contadorFinal==3 || contadorFinal==4 ) { classificacao = 'Cúmplice!' }
    else if (contadorFinal==5) {classificacao = 'Assassino(a)!'} 
    
    return classificacao 
}

// Chamando Funções Criadas para Executar o Programa
contadorFinal = interrogar(contador)
classificacao = classificar(contadorFinal)

document.write(classificacao)
    