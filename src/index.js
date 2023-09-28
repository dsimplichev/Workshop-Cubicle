// Imports
const express = require('express');
const expressConfig = require("./config/expressConfig")
const handlebarsConfig = require("./config/handlebarsConfig")
const dbConnect = require("./config/dbConfig");
const { PORT } = require("./constants");
const routes = require('./router')

//Connecting to DB
dbConnect()
    .then(() => console.log("Successfuly connected to DB "))
    .catch((err) => console.log(`Error while connecting in DB: ${err}`));

//local variables 
const app = express();


//Config
handlebarsConfig(app);
expressConfig(app)



//Routing
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))