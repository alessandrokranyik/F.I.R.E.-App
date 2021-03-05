// berechnenButton.addEventListener("click", kapitalBerechnen);
const berechnenButton = document.getElementById("berechnen");
berechnenButton.addEventListener("click", zuwachsBerechnen);

function zuwachsBerechnen() {
  var anfangskapital = 0,
    zinssatz = 0,
    ausgaben = 0,
    noetigeskapital = 0,
    dauer = 0,
    kontostand = 0,
    laufzeit = 0,
    dauerErgebnis = 0,
    ergebnis = 0;

  //Benutzer Eingabe {Startkapital, Zinssatz}
  anfangskapital = document.querySelector("#anlagen").value;
  zinssatz = document.querySelector("#compoundeffect").value;
  anfangskapital = parseInt(anfangskapital, 10);
  zinssatz = parseInt(zinssatz, 10);

  //Benutzer Eingabe {Ausgaben}, Berechnung benötigten Kapitals & Dauer
  ausgaben = document.getElementById("ausgaben").value;
  noetigeskapital = ausgaben * 30;
  dauer = noetigeskapital / anfangskapital;
  kontostand = anfangskapital;
  laufzeit = dauer;

  kapitalErgebnis = document.getElementById("p01");
  noetigeskapital = ausgaben * 30;
  nachricht =
    "Ihr nötiges Kapital für F.I.R.E. beträgt: " + noetigeskapital + "€.";
  kapitalErgebnis.innerHTML = nachricht;

  //Zinseszins-berechnung
  for (jahr = 1; jahr < laufzeit; jahr++) {
    var zinsen;
    zinsen = (kontostand * zinssatz) / 100;
    kontostand = kontostand + zinsen;
    kontostand += anfangskapital;

    console.log("Jahr " + jahr + ".");
    console.log("Zinsen:" + zinsen.toFixed(0) + "€");
    console.log("+ " + anfangskapital + "€");
    console.log("Konto:" + kontostand.toFixed(0) + "€");
    console.log("");
    if (kontostand > noetigeskapital) {
      console.log(jahr);
      dauer = jahr;
      console.log(dauer);
      break;
    }
  }
  // Ergebnis Ausgabe
  if (zinssatz != undefined) {
    dauerErgebnis = document.getElementById("p02");
    ergebnis =
      "In " +
      dauer +
      " Jahren sind sie am Ziel. Ihr Kontostand beträgt dann: " +
      kontostand.toFixed(2) +
      "€";
    dauerErgebnis.innerHTML = ergebnis;
    // var int = parseInt(kontostand);
    // console.log(int);
  }
  console.log(dauer * 2);
}
