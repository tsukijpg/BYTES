function somaDiagonalSecundaria(matrizquadrada) {
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[i][matrizquadrada.length - 1 - 1] //quero adicionar á soma a posiçao de i + o fim do array menos 1 para achar a ultima posição
    }

    return soma
    // matrizquadrada[0][3 - 0    3] // começa na posiçao 0..... encontra o 3 que é o fim..... tira um que está a mais no comprimento.... tiro o valor de i 
    // matrizquadrada[1][3 - 1    2]
    // matrizquadrada[2][3 - 2    1]
    // matrizquadrada[3][3 - 3    0]

}

[
    [1, 2, 3, 4], //0 3
    [1, 2, 3, 4], //1
    [1, 2, 3, 4],
    [1, 2, 3, 4],
]

principal:
function somaDiagonalSecundaria(matrizquadrada) {
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[i][matrizquadrada.length - 1 - 1] //quero adicionar á soma a posiçao de i + o fim do array menos 1 para achar a ultima posição
    }

    return soma
    // matrizquadrada[0][3 - 0    3] // começa na posiçao 0..... encontra o 3 que é o fim..... tira um que está a mais no comprimento.... tiro o valor de i 
    // matrizquadrada[1][3 - 1    2]
    // matrizquadrada[2][3 - 2    1]
    // matrizquadrada[3][3 - 3    0]

}
