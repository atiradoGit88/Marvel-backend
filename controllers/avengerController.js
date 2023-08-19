const express = require("express");
const avengers = express.Router();
const {
    getAllAvengers,
    getAvenger,
    newAvenger,
    deleteAvenger,
    updateAvenger,
  } = require("../queries/avengers.js");
  
  const {
    checkBoolean,
    checkVigilanteTitle,
    checkBirthPlace,
  } = require("../validations/checkAvengers.js");


//index
avengers.get("/", async  (req, res) => {
    const allAvengers = await getAllAvengers();
    console.log(allAvengers)
    if (allAvengers[0]) {
        res.status(200).json(allAvengers);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

// // SHOW
avengers.get("/:id", async (req, res) => {
    const { id } = req.params;
    const avenger = await getAvenger(id);
    if (avenger.runtime) {
      res.json(avenger);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE AND POSTS IT TO ALL AVENGERS
avengers.post("/", checkBoolean, checkVigilanteTitle, checkBirthPlace, async (req, res) => {
    try {
      const avenger = await newAvenger(req.body);
      res.json(avenger);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  // UPDATE THE ID OF THE AVENGER
avengers.put("/:id", checkBoolean, checkVigilanteTitle, checkBirthPlace, async (req, res) => {
    const { id } = req.params;
    const updatedAvenger = await updateAvenger(id, req.body);
    res.status(200).json(updatedAvenger);
  });
  
  // {
    // vigilante_title,
    // abilities,
    // birthplace,
    // is_ally,
    // power_scale,
    // alter_ego,
    // issue_appearance,
    // file_photo
  // }
  
  // DELETE
avengers.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedAvenger = await deleteAvenger(id);
    if (deletedAvenger.id) {
      res.status(200).json(deletedAvenger);
    } else {
      res.status(404).json("Avenger not found");
    }
  });
  

module.exports = avengers 