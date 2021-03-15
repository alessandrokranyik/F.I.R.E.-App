const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Google Authentifikator
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID =
  "344596745665-g5ts6amuf2m39pt62v3o5rvmt0fnf415.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

// middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());

// routen
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/protected", (req, res) => {
  res.render("protected.ejs");
});

app.get("/dashboard", checkAuthenticated, (req, res) => {
  let user = req.user;
  // res.send("200", {user});
  res.render("dashboard", {user});
});

app.get("/logout", (req, res) => {
  res.clearCookie("session_token");
  res.redirect("/login");
});

// User Session Token
app.post("/login", (req, res) => {
  let token = req.body.token;
  console.log(token);

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    console.log(payload);
  }
  verify()
    .then(() => {
      res.cookie("session_token", token);
      res.send("success");
    })
    .catch(console.error);
});


function checkAuthenticated(req, res, next) {
  let token = req.cookies['session_token'];

  let user = {};
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    });

    const payload = ticket.getPayload();
    user.name = payload.name;
    user.email = payload.email;
    user.pipcture = payload.picture;
  }
  verify()
    .then(() => {
      req.user = user;
      next();
    })
    .catch( err => {
      res.redirect('/login')
    });
}


app.use('/public', express.static('public'));