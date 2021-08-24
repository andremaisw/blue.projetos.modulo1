let contador = 0
let classificacao
let n1 = prompt('Digite o seu primeiro nome: ')
const nome = n1[0].toUpperCase() + n1.substring(1)
const sexo = prompt('Digite o seu sexo biológico: [MASC/FEM] ').toLocaleUpperCase()[0]

// Criando Funções == INTERROGAR USUÁRIO
function interrogar(contador) {
    
    // Se o USUÁRIO responder SIM para a pergunta, o contador soma +1
    let p1 = prompt('Você telefonou para a vitima?').toUpperCase()[0]
    if (p1=='S') {++contador}

    let p2 = prompt('Você esteve no local do crime?').toUpperCase()[0]
    if (p2=='S') {++contador}

    let p3 = prompt('Você mora perto da vítima?').toUpperCase()[0]
    if (p3=='S') {++contador}

    let p4 = prompt('Você devia para a vítima?').toUpperCase()[0]
    if (p4=='S') {++contador}

    let p5 = prompt('Você já trabalhou com a vítima?').toUpperCase()[0]
    if (p5=='S') {++contador}
    
    return contador
}
    
// Criando Funções = CLASSIFICAR USUÁRIO DE ACORDO COM RESPOSTAS
function classificar(contadorFinal) {
    
    if (contadorFinal <= 1) {classificacao = 'Inocente!'}
    else if (contadorFinal==2) {classificacao = 'Suspeito(a)!'}
    else if (contadorFinal==3 || contadorFinal==4) {classificacao = 'Cúmplice!'}
    else if (contadorFinal==5) {classificacao = 'Assassino(a)!'} 
    
    return classificacao 
}

// Chamando Funções Criadas para Executar o Programa
contadorFinal = interrogar(contador)
classificacao = classificar(contadorFinal)


if (sexo == 'M'){console.log(`O ${nome} é ${classificacao}`)}
else{console.log(`A ${nome} é ${classificacao}`)}

    