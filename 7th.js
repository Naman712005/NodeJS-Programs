const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


const USERNAME = "admin";
const PASSWORD = "1234";


app.get("/", (req, res) => {
    res.render("login", { message: "" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
        res.send("<h1>Login Successful!</h1>");
    } else {
        res.render("login", { message: "Invalid credentials" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});