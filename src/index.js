const express = require('express')
const app = express();
const PORT = 5010;

app.get("/", (req, res) => {
    res.send("Hello Deni");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))