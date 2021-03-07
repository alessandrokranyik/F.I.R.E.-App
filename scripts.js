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
  ausgaben = document.getElementById("ausgaben").value;
  kapitalErgebnis = document.getElementById("p01");
  dauerErgebnis = document.getElementById("p02");

  if (ausgaben == "") {
    kapitalErgebnis.innerHTML = "jährliche Ausgaben fehlen!";
    throw console.error("Ausgaben fehlen!");
  } else if (anfangskapital == "") {
    kapitalErgebnis.innerHTML = "jährliche Anlagen fehlen!";
    throw console.error("Anlagen fehlen!");
  }

  anfangskapital = parseInt(anfangskapital, 10);
  noetigeskapital = ausgaben * 30;
  nachricht =
    "Ihr nötiges Kapital für F.I.R.E. beträgt: " + noetigeskapital + "€.";
  kapitalErgebnis.innerHTML = nachricht;
  if (zinssatz == "") {
    dauerErgebnis.innerHTML = "Zinssatz fehlt!";
    throw console.error("Zinssatz fehlt!");
  }
  //Zinseszins-berechnung
  dauer = noetigeskapital / anfangskapital;
  kontostand = anfangskapital;
  laufzeit = dauer;

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
      dauer = jahr;
      break;
    }
  }

  //Ergebnis Ausgabe
  ergebnis =
    "In " +
    dauer +
    " Jahren sind sie am Ziel. <br> Ihr Kontostand beträgt dann: " +
    kontostand.toFixed(2) +
    "€";
  dauerErgebnis.innerHTML = ergebnis;
}
