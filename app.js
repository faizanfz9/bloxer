const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/db");

const users = require("./routes/users");
const blogs = require("./routes/blogs");
const app = express();

// connect to database
mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// on connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database" + config.database);
});

// on error
mongoose.connection.on("error", (err) => {
    console.log("Database error" + err);
});

// port number
const PORT = process.env.PORT || 8080;

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// body parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport)

// cors middleware
app.use(cors());

app.use("/api/users", users);
app.use("/api/blogs", blogs);

// index route
app.get("/", function(req, res){
    res.send("Hello from server");
})

// start server
app.listen(PORT, function(){
    console.log("server has been started on" + PORT);
})