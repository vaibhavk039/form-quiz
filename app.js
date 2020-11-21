const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/form.html");
});


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/form.html");
});




app.post('/', function(req, res) {



    const answer = "HyperText Markup Language";

    if (req.body.q1 == answer) {
        res.send("wrong answer " + req.body.q1);

    }




});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running at port 3000");
})