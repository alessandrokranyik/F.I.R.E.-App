
function buttonFunction(){
    kapitalBerechnen();
}

function zuwachsBerechnen(){
    //Benutzer Eingabe {Startkapital, Zinssatz}
    var anfangskapital = document.querySelector('#anlagen').value;
    var zinssatz = document.querySelector('#compoundeffect').value;
    anfangskapital = parseInt(anfangskapital,10);
    zinssatz = parseInt(zinssatz,10);
    
    //Benutzer Eingabe {Ausgaben}, Berechnung benötigten Kapitals & Dauer
    ausgaben = document.getElementById('ausgaben').value;
    noetigeskapital = (ausgaben * 30);
    dauer = (noetigeskapital / anfangskapital);
    var kontostand = anfangskapital;
    var laufzeit = dauer;

    for(jahr = 1; jahr < laufzeit; jahr++){
        var zinsen = kontostand * zinssatz /100;
        kontostand = kontostand + zinsen;
        kontostand += anfangskapital;

        console.log('Jahr ' + jahr + '.');
        console.log('Zinsen:' + zinsen.toFixed(0) + '€');
        console.log('+ ' + anfangskapital + '€');
        console.log('Konto:' + kontostand.toFixed(0) + '€');
        console.log('');
        if(kontostand > noetigeskapital) {
            console.log(jahr);
            dauer = jahr;
            break;
        }
    }

    dauerErgebnis = document.getElementById('p02');
    var ergebnis = "In " + dauer + " Jahren sind sie am Ziel. Ihr Kontostand beträgt dann: " + kontostand.toFixed(2) + "€";
    dauerErgebnis.innerHTML = ergebnis;
}

function kapitalBerechnen() {
    var ausgaben, anlagen, alter, fire, kapital, dauer, firedauer, 

    kapitalErgebnis = document.getElementById('p01');
    dauerErgebnis = document.getElementById('p02');
    zinsErgebnis = document.getElementById('p03');

    ausgaben = document.getElementById('ausgaben').value;
    anlagen = document.querySelector('#anlagen').value;
    alter = document.querySelector('#alter').value;
    fire = document.querySelector('#fire').value;
    
    
    noetigeskapital = (ausgaben * 30);
    var nachricht = "Ihr nötiges Kapital für F.I.R.E. beträgt: " + noetigeskapital +'€.';
    kapitalErgebnis.innerHTML = nachricht;
    
    dauer = (noetigeskapital / anlagen);
    firedauer = noetigeskapital / (fire - alter);
    var nachricht2 = "In " + dauer + " Jahren sind sie am Ziel. <br><br> Möchten sie ihr Ziel innerhalb des angegebenen FIRE-Alters erreichen müssen sie jährlich " + firedauer + "€ anlegen."
    dauerErgebnis.innerHTML = nachricht2;
}




    