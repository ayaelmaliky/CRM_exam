
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Route /
app.get("/", (req, res) => {
    res.send("Hello from le front, Aya El Maliky");
});

// Route /login
app.get("/login", (req, res) => {
    res.send("Bienvenue sur la route login");
});

// Route /sign-up
app.get("/sign-up", (req, res) => {
    res.send("Bienvenue sur la route sign up");
});

// Route API
app.get("/api/test", (req, res) => {
    res.json({
        message: "Connexion Front-Back réussie"
    });
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});
