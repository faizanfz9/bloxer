const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/db");

const users = require("./routes/users");
const app = express();

// connect to database
mongoose.connect(config.database);

// on connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database" + config.database);
});

// on error
mongoose.connection.on("error", (err) => {
    console.log("Database error" + err);
});

// port number
const PORT = 3000;

// body parser middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors());

app.use("/users", users);

// index route
app.get("/", function(req, res){
    res.send("Hello from server");
})

// start server
app.listen(PORT, function(){
    console.log("server has been started on" + PORT);
})