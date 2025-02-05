/*let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
}*/

// Método alert para mostrar elemento fijo "Hola mundo"
//alert('Hola mundo');
// Método let para almacenar el número ingresado por el usuario (variable) gracias al método promt
let numeroMaximo = 10;
let numeroUsuario = 0;
// Generamos un número psudoaleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let contador = 1;
let contadorMaximo = 6;
//let palabraVez = 'vez';
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt (`Me indicas un número entre 1 y ${numeroMaximo} por favor:`)); 
    // Solicitamos que el tipo de dato ingresado por el usuario se muestre en la consola
    console.log(typeof(numeroUsuario));
    // Solicitamos que los datos ingresados en la variable se muestren en la consola del desarrollador. Esto será útil para porbar, testear los valores que se van ingresando
    console.log('El numero del usuario es ', numeroUsuario);
    // Solicitamos que se escriba el resultado de la comparación en la consola
    console.log('La comparación es ', numeroUsuario==numeroSecreto);
    // Indicamos la respuesta si nuestros números coinciden
    if (numeroSecreto==numeroUsuario){
        // Resultado si la condición se cumple. Empleamos operador ternario '?' ':' para evaluar si mostrar la palabra 'vez' o 'veces'
        alert(`¡Felicidades, acertaste el número secreto: ${numeroSecreto}! Lo hiciste en ${contador} ${contador == 1 ? 'vez' : 'veces'}.`);
    } else {
        // Solicitamos que escriba en la consola cuál era el n° secreto
        console.log('El número secreto era ', numeroSecreto);
        // Condicional anidada para dar pistas
        if (numeroSecreto>numeroUsuario) {
            alert('El número es mayor');
        }
        else {alert('El número es menor');}
        // Reasignamos los valores del contador y palabra vez tras cada error del usuario
        contador ++;
        // palabraVez = 'veces';
        // Rompemos el bucle WHILE cuando se llega a 3 intentos
        if (contador > contadorMaximo) {
            alert(`Llegaste al número máximo de ${contadorMaximo} intentos`);
            break;
        }
    }
}