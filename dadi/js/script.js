// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero 2 numeri random
let userResult = Math.floor(Math.random() * 6) + 1;
let botResult = Math.floor(Math.random() * 6) + 1;

// Stampo in pagina i numeri
document.getElementById('user_result').innerHTML = userResult
document.getElementById('bot_result').innerHTML = botResult

// Definisco la logica del gioco e stampo l'esito

if (userResult === botResult) {
    document.getElementById('final_result').innerHTML = 'Pareggio, ritenta!'
}

else if (userResult > botResult) {
    document.getElementById('final_result').innerHTML = 'Hai vinto, complimenti!'}

else {
    document.getElementById('final_result').innerHTML = 'Hai perso, riprova!'
}