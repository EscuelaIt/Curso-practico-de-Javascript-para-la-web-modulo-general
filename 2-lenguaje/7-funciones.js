
//declarar una función
function colorear() {
  document.bgColor = '#339999';
}

//colorear();


colorearColor('yellow');


//parametros
function colorearColor(color) {
  document.bgColor = color;
}

//valores de retorno
function pideNumero() {
  var numero;
  do {
    numero = prompt('Dame un número', '');
    numero = Number(numero);
    if(numero > 1000) {
      return 'kk';
    }
  } while (isNaN(numero));
  return numero;
}

//var miNumero = pideNumero();
//console.log(miNumero);


function referencia(x) {
  x = 55;
}

var x = 11;
referencia(x);
console.log(x);


//ambito de las variables
var local = 44;
function ambito() {
  var local = 33;
}
ambito();
console.log(local);




