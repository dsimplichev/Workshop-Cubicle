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

router.get("/:cubeId/details", (req, res) =>{
    const { cubeId } = req.params;
    const cube = cubeServices.getSingleCube(cubeId);

    if(!cube) {
        res.redirect("/404");
        return;
    }
    res.render("details", {...cube});
})
module.exports = router;