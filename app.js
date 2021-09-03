const express = require("express");
const bodyParser = require("body-parser");
var items = [];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    //var today = new Date;
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);
    console.log(today.toLocaleDateString("en-US", options));
    // console.log(currentday);
    res.render("list", {
        kindofday: day,
        newlistitems: items,
    });
});

app.post("/", function(req, res) {
    item = req.body.inputtext;
    items.push(item);
    res.redirect("/");

})
app.listen(3000, function(req, res) {
    console.log("Server running at port 3000");
})