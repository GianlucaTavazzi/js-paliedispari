//fare scegliere all'utante pari o dispari
var scelta = prompt('Scegli: pari o dispari?')

//chiedo all'utente un numero da 1 a 5
var numero_utente = parseInt(prompt('Digita un  numero da 1 a 5'))
console.log(numero_utente);

if (numero_utente <= 5 && numero_utente >=1 ) {
    //genero un numero casuale da 1 a 5
    var numero_casuale = Math.floor(Math.random() * 5) + 1;
    console.log(numero_casuale);
    //fare la somma dei due numeri
    var somma = numero_utente + numero_casuale;
    console.log(somma);

    //valutare se l'utente ha vinto
    if (scelta == 'pari' && somma%2 == 0) {
        console.log('Hai vinto!');
    } else if (scelta == 'dispari' && somma%2 !=0){
        console.log('Hai vinto!');
    } else if ((scelta == 'dispari' && somma%2 == 0) || (scelta == 'pari' && somma%2 !=0)){
        console.log('Hai perso!');
    } else {
        console.log('Non hai inserito la parola corretta');
    }
} else {
    console.log('ripeti');
}
