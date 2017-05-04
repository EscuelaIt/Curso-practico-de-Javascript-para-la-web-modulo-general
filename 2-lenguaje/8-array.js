var numeros = [3, 5, 2, 10, 'fff', [40, 45, 'e', [49, 2]]];
console.log('numeros.length', numeros.length);
console.log(numeros[5][3][1]);
numeros.push(1000);
console.log('numeros.length', numeros.length);


function sumatorio(vector) {
  var sum = 0;
  // for(var i = 0; i < vector.length; i++) {
  //   sum += vector[i];
  // }

  for(i in vector) {
    var valor = vector[i];
    if(typeof valor == 'number') {
      sum += vector[i];
    }
  }
  return sum;
}

console.log(sumatorio(numeros));
