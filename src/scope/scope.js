// las variables de scope global pueden ser usadas es scope local, pero las variables de scope local no pueden ser usadas en scope global

var nombre = 'joyelocode';

function miNombre() {
    var apellido = ' santibañez';
    console.log(nombre + '' + apellido);
}

apellido;