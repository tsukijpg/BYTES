let arrayDePares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayDePares.push(array[i]);
    }
  }

  return arrayDePares;
}
