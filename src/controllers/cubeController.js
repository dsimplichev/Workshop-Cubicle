const router = require('express').Router();
const cubeServices = require("../services/cubeServices")

router.get('/create', (req, res) =>{
    console.log(cubeServices.getAll());
    res.render("create")
});

router.post("/create", async (req, res) => {
    const { name, discription, imageUrl, difficultyLevel} = req.body; 
    
    cubeServices.create({
        name,
        discription,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    });
    
    res.redirect("/");
});

router.get("/:cubeId/details", (req, res) =>{
    const { cubeId } = req.params;
    const cube = cubeServices.getSingleCube(cubeId).lean();

    if(!cube) {
        res.redirect("/404");
        return;
    }
    res.render("details", { cube });
})
module.exports = router;