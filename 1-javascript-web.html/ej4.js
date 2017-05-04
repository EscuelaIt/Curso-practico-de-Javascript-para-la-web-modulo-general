function cambiaEstilo() {
  this.style.color = '#cc33cc';
  this.style.fontSize = '2em';
}

function inicializarAno() {
  var ano = new Date().getFullYear();
  
  var elementoAno = document.getElementById('ano');
  
  elementoAno.value = ano;
  elementoAno.addEventListener('click', cambiaEstilo);
}

document.addEventListener('DOMContentLoaded', inicializarAno);