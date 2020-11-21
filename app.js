const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/form.html");
});


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/form.html");
});




app.post('/', function(req, res) {



    const answer = "HyperText Markup Language";
    const chosen = req.body.q;

    if (chosen == answer) {
        res.send("correct answer");

    } else {
        res.send("wrong answer");
    }





});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running at port 3000");
})