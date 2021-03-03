
const berechnenButton = document.getElementById('berechnen');
berechnenButton.addEventListener('click', kapitalBerechnen);

const zuwachsButton = document.getElementById('zuwachs');
zuwachsButton.addEventListener('click', zuwachsBerechnen);

// function buttonFunction(){
//     kapitalBerechnen();
// }

function zuwachsBerechnen(){
  var anfangskapital, zinssatz, ausgaben, noetigeskapital, dauer, kontostand, laufzeit,
      dauerErgebnis, ergebnis;

  //Benutzer Eingabe {Startkapital, Zinssatz}
  anfangskapital = document.querySelector('#anlagen').value;
  zinssatz = document.querySelector('#compoundeffect').value;
  anfangskapital = parseInt(anfangskapital,10);
  zinssatz = parseInt(zinssatz,10);
    
  //Benutzer Eingabe {Ausgaben}, Berechnung benötigten Kapitals & Dauer
  ausgaben = document.getElementById('ausgaben').value;
  noetigeskapital = (ausgaben * 30);
  dauer = (noetigeskapital / anfangskapital);
  kontostand = anfangskapital;
  laufzeit = dauer;

  //Zinseszins-berechnung
  for(jahr = 1; jahr < laufzeit; jahr++){
      var zinsen;
      zinsen = kontostand * zinssatz /100;
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
  // Ergebnis Ausgabe
  dauerErgebnis = document.getElementById('p02');
  ergebnis = "In " + dauer + " Jahren sind sie am Ziel. Ihr Kontostand beträgt dann: " +
  kontostand.toFixed(2) + "€";
  dauerErgebnis.innerHTML = ergebnis;
}

function kapitalBerechnen() {
  var ausgaben, anlagen, alter, fire, kapital, dauer, firedauer, nachricht, nachricht2; 

  kapitalErgebnis = document.getElementById('p01');
  dauerErgebnis = document.getElementById('p02');
  zinsErgebnis = document.getElementById('p03');

  ausgaben = document.getElementById('ausgaben').value;
  anlagen = document.querySelector('#anlagen').value;
  alter = document.querySelector('#alter').value;
  fire = document.querySelector('#fire').value;
    
    
  noetigeskapital = (ausgaben * 30);
  nachricht = "Ihr nötiges Kapital für F.I.R.E. beträgt: " + noetigeskapital +'€.';
  kapitalErgebnis.innerHTML = nachricht;
    
  dauer = (noetigeskapital / anlagen);
  firedauer = noetigeskapital / (fire - alter);
  nachricht2 = "In " + dauer + " Jahren sind sie am Ziel. <br><br> Möchten sie ihr Ziel  innerhalb des angegebenen FIRE-Alters erreichen müssen sie jährlich " + firedauer + "€ anlegen."
  dauerErgebnis.innerHTML = nachricht2;
}




    