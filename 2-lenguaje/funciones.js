function suma() {
  var op1 = document.getElementById('operando1').value;
  var op2 = document.getElementById('operando2').value;
  var resultado = Number(op1) + Number(op2);
  if(isNaN(resultado)){
    alert('Esa operación no se puede...')
  } else {
    document.getElementById('resultado').value = resultado;
  }
}