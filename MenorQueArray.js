function existeMenorDoQueN(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < n) {
      return true;
    }
  }
