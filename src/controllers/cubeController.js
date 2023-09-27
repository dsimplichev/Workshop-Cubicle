const router = require('express').Router();
const cubeServices = require("../services/cubeServices")

router.get('/create', (req, res) =>{
    console.log(cubeServices.getAll());
    res.render("create")
});

router.post("/create", (req, res) => {
    const { name, discription, imageUrl, difficultylevel} = req.body; 
    
    cubeServices.create({
        name,
        discription,
        imageUrl,
        difficultylevel: Number(difficultylevel),
    });
    console.log(req.body)
    res.redirect("/");
});
module.exports = router;