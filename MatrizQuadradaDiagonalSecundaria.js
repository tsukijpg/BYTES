function somaDiagonalSecundaria(matrizquadrada) {
    // escreve aqui a função
    let soma = 0;
    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[i][matrizquadrada.length - 1 - i]
    }

    return soma
    // matrizquadrada[0][3 - 0 => 3]
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
