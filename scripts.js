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

  //Chart
  // dauer = dauer;
  let arraytest = ["apples", "cherries", "pie", "cake", "kuchen"];
  
  const lineChart = document.getElementById("myChart");
  

  dauerTeiler = dauer/10;

  let myChart = new Chart(lineChart, {
    type: "line",
    data: {
      labels: [0, (dauerTeiler*2).toFixed(1) , (dauerTeiler*3).toFixed(1), (dauerTeiler*4).toFixed(1), (dauerTeiler*5).toFixed(1), (dauerTeiler*6).toFixed(1), (dauerTeiler*7).toFixed(1), (dauerTeiler*8).toFixed(1), dauer],
      datasets: [
        {
          label: "/> Kapital",
          data: [anfangskapital, 100000, 200000, 300000, 400000, 500000, 600000, 800000, kontostand],
          backgroundColor: ["rgb(153, 204, 255, .2)"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
for (let i = 0; i < arraytest.length; i++) {
    myChart.data.labels[i] = arraytest[i];
    console.log(myChart.data.labels);
  }
  console.log(myChart.data.labels[0]);
  myChart.data.labels[0] = arraytest[2];
  console.log(myChart.data.labels[0]);

  
}
