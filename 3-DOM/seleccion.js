document.addEventListener('DOMContentLoaded', inicializacion);

function inicializacion() {

  var cambiaClaseButton = document.getElementById('cambiaClase');
  cambiaClaseButton.addEventListener('click', cambiaEstilosClase);

  var cambiarLiButton = document.getElementById('cambiarLi');
  cambiarLiButton.addEventListener('click', cambiaEstilosLi);
}


function cambiaEstilosClase() {
  var elementos = document.getElementsByClassName('item');
  console.log(elementos);
  console.log(elementos.length);
  console.log(elementos.item(0));
  for(var i = 0; i < elementos.length; i++) {
    console.log('Item:', elementos.item(i));
    elementos[i].style.color = '#399';
  }
}

function cambiaEstilosLi() {
  var liElements = document.getElementsByTagName('li');
  console.log(liElements);
  for(var i = 0; i < liElements.length; i++) {
    console.log('Item:', liElements.item(i));
    liElements.item(i).classList.add('itemgrande');
  }
}