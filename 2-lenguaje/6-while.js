var nombre = '';
while (nombre != 'Miguel') {
  nombre = prompt('Dime tu nombre', 'Miguel');
}
alert('Bienvenido!!');


var nombre;
do {
  nombre = prompt('Dime tu nombre', 'Miguel');
} while (nombre != 'Miguel');
alert('Bienvenido 2!!');
