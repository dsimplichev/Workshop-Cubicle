const router = require("express").Router();
const cubeServices = require("../services/cubeServices");
const accessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  res.render("cube/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeServices.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeServices.getSingleCube(cubeId).lean();

  if (!cube) {
    res.redirect("/404");
    return;
  }

  const hasAccessories = cube.accessories?.length > 0;
  res.render("cube/details", { cube, hasAccessories });
});

// accessory attachement
router.get("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeServices.getSingleCube(cubeId).lean();

  const accessories = await accessoryService
    .getWithoutOwned(cube.accessories)
    .lean();
  const hasAccessories = accessories.length > 0; // view data, template data

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const { accessory: accessoryId } = req.body;

  await cubeServices.attachAccessory(cubeId, accessoryId);
  res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;