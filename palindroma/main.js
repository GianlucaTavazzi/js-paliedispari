//trasformo la stringa in un array
//verifico che le lettere possano essere messe in posizione invrsa
// var parola_utente = prompt('Questa parola è palindroma?');
// console.log(parola_utente);
// var trasformazione = Array.from(parola_utente);
// console.log(trasformazione);
// var contrario = trasformazione.reverse()
// console.log(contrario);
// var riformo = contrario.join('')
// console.log(riformo);
//
// if (parola_utente == riformo) {
// console.log('La parola è palindroma');
// } else {
// console.log('La parola non è palindorma');
// }

var parola_utente = prompt('Questa parola è palindroma?');
console.log(parola_utente);

function palindromo(parola) {
    var trasformazione = Array.from(parola_utente);
    console.log(trasformazione);
    var contrario = trasformazione.reverse()
    console.log(contrario);
    var riformo = contrario.join('')
    console.log(riformo);
    return riformo;
}

var riformo = palindromo(parola_utente)


if (parola_utente == riformo) {
console.log('La parola è palindroma');
} else {
console.log('La parola non è palindorma');
}
