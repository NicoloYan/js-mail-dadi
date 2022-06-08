// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Email consentite:
// sonolaemail0@gmail.com
// sonolaemail1@gmail.com
// sonolaemail2@gmail.com
// sonolaemail3@gmail.com
// sonolaemail4@gmail.com




const emailsAllowed = ['sonolaemail0@gmail.com', 'sonolaemail1@gmail.com', 'sonolaemail2@gmail.com', 'sonolaemail3@gmail.com', 'sonolaemail4@gmail.com'];

const userEmail = prompt('Dimmi la tua email');

// Scorro l'array (col ciclo for)
// Una emailInTheList = false in cui salvo se l'email fa parte della lista o no
// Per ogni elemento:
    // Controllo se userEmail si trova nell'array (con una if)
    // emailInTheList = true
let emailInTheList = false;
for(let i = 0; i < emailsAllowed.length; i++) {
    const thisEmail = emailsAllowed[i];
    
    if(thisEmail === userEmail) {
        emailInTheList = true;
    }
}

// emailInTheList === true allora dico all'utente 'Benvenuto!'
// Altrimenti, 'Accesso negato'
if(emailInTheList) {
    alert('Benvenuto!');
} else {
    alert('Accesso negato');
}