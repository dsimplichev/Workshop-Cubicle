// Imports
const express = require('express');
const expressConfig = require("./config/expressConfig")
const handlebarsConfig = require("./config/handlebarsConfig")
const { PORT } = require("./constants");

//local variables 
const app = express();


//Config
handlebarsConfig(app);
expressConfig(app)



//Routing
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))