const express = require("express");

const app = express();


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://live.staticflickr.com/7150/6495176815_05d090be21_b.jpg"},
        {name: "Granite Hill", image: "https://farm5.staticflickr.com/4194/34188174400_32a5880c14_b.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3492/3857810442_0fd6251257_b.jpg"},
    ]

    res.render("campgrounds", {campgrounds: campgrounds})
})

app.listen(process.env.PORT || 3000, process.envIP, () => {
    console.log("Server started!")
})