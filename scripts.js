// berechnenButton.addEventListener("click", kapitalBerechnen);
const berechnenButton = document.getElementById("berechnen");
berechnenButton.addEventListener("click", zuwachsBerechnen);

function deleteGraph() {
  let myChart = document.querySelector('#myChart');
  

}


function zuwachsBerechnen() {
  // deleteGraph();
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
  laufzeit = dauer;
  kontostand = anfangskapital;
  console.log("Jahr 0.");
  console.log("Konto: " + kontostand.toFixed(0) + "€");

  let guthabenArray = [kontostand];
  let jahreArray = [0];

  for (jahr = 1; jahr < laufzeit; jahr++) {
    var zinsen;
    zinsen = (kontostand * zinssatz) / 100;
    kontostand = kontostand + zinsen;
    kontostand += anfangskapital;
    guthabenArray[jahr] = kontostand;
    jahreArray[jahr] = jahr;

    console.log("Jahr " + jahr + ".");
    console.log("Zinsen: " + zinsen.toFixed(0) + "€");
    console.log("+ " + anfangskapital + "€");
    console.log("Konto " + kontostand.toFixed(0) + "€");
    console.log("");
    if (kontostand > noetigeskapital) {
      dauer = jahr;
      break;
    }
  }
  console.log(guthabenArray);
  console.log(jahreArray);

  //Ergebnis Ausgabe
  ergebnis =
    "In " +
    dauer +
    " Jahren sind sie am Ziel. <br> Ihr Kontostand beträgt dann: " +
    kontostand.toFixed(2) +
    "€";
  dauerErgebnis.innerHTML = ergebnis;

  //Chart

  const lineChart = document.getElementById("myChart");

  dauerTeiler = dauer / 10;
  let myChart = new Chart(lineChart, {
    type: "line",
    data: {
      labels: [
        dauer - dauer,
        (dauerTeiler * 2).toFixed(1),
        (dauerTeiler * 3).toFixed(1),
        (dauerTeiler * 4).toFixed(1),
        (dauerTeiler * 5).toFixed(1),
        (dauerTeiler * 6).toFixed(1),
        (dauerTeiler * 7).toFixed(1),
        (dauerTeiler * 8).toFixed(1),
        dauer,
      ],
      datasets: [
        {
          label: "/> Kapital",
          data: [
            anfangskapital,
            guthabenArray[1],
            guthabenArray[2],
            guthabenArray[3],
            guthabenArray[4],
            guthabenArray[5],
            guthabenArray[6],
            guthabenArray[7],
            kontostand,
          ],
          backgroundColor: ["rgb(153, 204, 255, .4)"],
          borderColor: [
            "rgba(255, 128, 0, .8)",
            "rgba(255, 128, 0, 1)",
            "rgba(255, 128, 0, 1)",
            "rgba(255, 128, 0, 1)",
            "rgba(255, 128, 0, 1)",
            "rgba(255, 128, 0, 1)",
            "rgba(255, 128, 0, 1)",
            "rgba(255, 128, 0, 1)",

            "rgba(0, 0, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
  //   console.log(myChart.data.labels[0]);
}
